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

function transmitCode(code) {
  exec(
    `rfoutlet/codesend ${code} -l 185 -p 0`,
    function (err, data) {
      if (err) console.log(err);
      console.log("exec data: ", data.toString());
    }
  );
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://autom8-8.firebaseio.com"
});

const db = admin.database();
const ref = db.ref("users/admin/switches");
const onValueChange = ref.on(
  "value",
  snapshot => {
    console.log(snapshot.val());
    const devices = snapshot.val();
    for (const [index, device] of devices.entries()) {
      setTimeout(() => {
        device.state ? transmitCode(device.code.on) : transmitCode(device.code.off);
      }, index * 500);
    }
    // stop listening
    ref.off("value", onValueChange);
  },
  errObj => {
    console.log("the read failed: " + errObj.code);
    // stop listening
    ref.off("value", onValueChange);
  }
);

const onChildChanged = ref.on(
  "child_changed",
  (snapshot) => {
    const device = snapshot.val()
    console.log(device);
    device.state ? transmitCode(device.code.on) : transmitCode(device.code.off);
  },
  errObj => {
    console.log("the read failed: " + errObj.code);
  }
);
