function createAssemblyLine() {

    let library = {
        hasClima(myCar) {

            myCar.temp = 21;
            myCar.tempSettings = 21;

            myCar.adjustTemp = () => {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp++;
                } else if (myCar.temp > myCar.tempSettings) {
                    myCar.temp--;
                }
            }
        },

        hasAudio(myCar) {
            myCar.currentTrack = {
                name: null,
                artist: null
            }


            myCar.nowPlaying = () => {
                if (myCar.name !== null && myCar.artist !== null) {
                    console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(myCar) {
            myCar.checkDistance = (num) => {

                if (num < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (num < 0.25) {
                    console.log("Beep! Beep!");
                } else if (num < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log(' ');
                }
            }
        }
    }
    return library;
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);

console.log(myCar.temp);
//21
myCar.tempSettings = 18;

myCar.adjustTemp();

console.log(myCar.temp);
//20


assemblyLine.hasAudio(myCar);

myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};

myCar.nowPlaying();
//Now playing 'Never Gonna Give You Up' by Rick Astley
assemblyLine.hasParktronic(myCar);
//Beep!
myCar.checkDistance(0.4);
//Beep! Beep!
myCar.checkDistance(0.2);
//" "
console.log(myCar);
/*
{

  make: 'Toyota',

  model: 'Avensis',

  temp: 20,

  tempSettings: 18,

  adjustTemp: [Function],

  currentTrack: {

    name: 'Never Gonna Give You Up',

    artist: 'Rick Astley'

  },

  nowPlaying: [Function],

  checkDistance: [Function]

}  */