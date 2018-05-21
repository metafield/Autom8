# Autom8

# Project description:
To use a combination of components, languages and frameworks to harness RF signals in order to potentiate home or business automation. The project uses both hardware:
* Controllable RF Outlets with on/off state
* Raspberry pi (Acting a both a server and a controller to the RF Outlets)
* RF Transmitter / Receiver

and software:
* VueJS / ReactJS User Frontend
* Firebase back end stores the state of a users home
* Nodejs server listening on the Pi to handle interaction with the RF outlets (Express / happi)
* C++ libraries to handle GPIO transactions with the PI
* Python as an interface to above C++ libraries

# set up
rfoutlet:
* default receive GPIO: 27
* default transmit GPIO: 17


Compile the codesend c++ source and run:
`./codesend code# -l pulseLength -p pin(use 0 for default)`

ex: `./codesend 4545804 -l 185 -p 0` turns 4 off.

Codes were found using an RF receiver via a controller listening for RF signals.

## Code table*
| Outlet | on code | off code |
| :----: | :-----: | :------: |
| 1      | 4543795 | 4543804  |
| 2      | 4543939 | 4543948  |
| 3      | 4544259 | 4544268  |
| 4      | 4545795 | 4545804  |
| 5      | 4551939 | 4551948  |

*All codes run on a pulse of ~184.