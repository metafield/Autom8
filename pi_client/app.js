// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!YOU MUST RUN THIS FILE ON THE RASPBERRY PI WITH firebase-admin INSTALLED!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const admin = require("firebase-admin");
const exec = require("child_process").exec;
const serviceAccount = require("./fbkey/key.json");

const RF_CODES = [
  { on: 4543795, off: 4543804 },
  { on: 4543939, off: 4543948 },
  { on: 4544259, off: 4544268 },
  { on: 4545795, off: 4545804 },
  { on: 4551939, off: 4551948 }
];

function transmit(isOn, relayIndex, delay) {
  setTimeout(() => {
    exec(
      `rfoutlet/codesend ${
        isOn ? RF_CODES[relayIndex].on : RF_CODES[relayIndex].off
      } -l 185 -p 0`,
      function(err, data) {
        if (err) console.log(err);
        console.log("exec data: ", data.toString());
      }
    );
  }, delay);
  
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://autom8-8.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("users/admin/switches");
ref.on(
  "value",
  snapshot => {
    console.log(snapshot.val());
    const devices = snapshot.val();
    for (const [index, device] of devices.entries()) {
      console.log(
        `sending ${device.state ? "on" : "off"} to: ${device.name}. With Code:`,
        `${device.state ? RF_CODES[index].on : RF_CODES[index].off}`
      );
      if (device.state) {
        // turn on
        transmit(true, index, index * 100);
      } else {
        // turn off
        transmit(false, index, index * 100);
      }
    }
  },
  errObj => {
    console.log("the read failed: " + errObj.code);
  }
);
