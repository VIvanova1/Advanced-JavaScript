function lockedProfile() {
    const usersDivEl = Array.from(document.getElementsByClassName('profile'));
    let isUnlocked = false;

    for (const user of usersDivEl) {

        const lockInputElement = user.querySelectorAll('input[type=radio]');
        for (const check of lockInputElement) {
            check.addEventListener('click', () => {

                if (check.value === 'lock') {
                    isUnlocked = false;
                } else if (check.value === 'unlock') {
                    isUnlocked = true;
                };
            });
        };

        const buttonsElement = Array.from(user.querySelectorAll('button'));
        for (const btn of buttonsElement) {
            btn.addEventListener('click', () => {
                const infoDivsElement = user.getElementsByTagName('div');
                if (isUnlocked) {
                    if (btn.textContent === 'Show more') {
                        infoDivsElement[0].style.display = 'block';
                        btn.textContent = 'Hide it';
                    } else if (btn.textContent === 'Hide it') {
                        infoDivsElement[0].style.display = 'none';
                        btn.textContent = 'Show more';
                    }
                }
            });
        };
    }
}