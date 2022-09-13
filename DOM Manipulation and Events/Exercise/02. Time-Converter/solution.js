function attachEventsListeners() {

    const daysInputEl = document.getElementById('days');
    const hoursInputEl = document.getElementById('hours');
    const minutesInputEl = document.getElementById('minutes');
    const secondsInputEl = document.getElementById('seconds');

    const buttons = document.querySelectorAll('input[type=button]');
    for (const button of buttons) {
        button.addEventListener('click', convertTime);

        function convertTime() {
            let typeConvert = button.id;
            let days = 0;
            if (typeConvert == 'daysBtn') {
                days = daysInputEl.value;
            } else if (typeConvert == 'hoursBtn') {
                days = (hoursInputEl.value) / 24;
            } else if (typeConvert == 'minutesBtn') {
                days = (minutesInputEl.value) / 1440;
            } else if (typeConvert == 'secondsBtn') {
                days = secondsInputEl.value / 86400;
            }

            daysInputEl.value = days;
            hoursInputEl.value = Number(days) * 24;
            minutesInputEl.value = Number(days) * 1440;
            secondsInputEl.value = Number(days) * 86400;
        };
    }
}