class ngStatus {
    constructor(element) {

        if (!element) return;

        // element
        this.element = document.querySelector(element);
        this.pay = this.element.querySelector('.pay');
        this.processing = this.element.querySelector('.processing');
        this.success = this.element.querySelector('.success');
        this.proceed = this.element.querySelector('.proceed');

        // event
        this.pay.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        this.onProcessing();

        // debug animation
        setTimeout(() => this.onSuccess(), 3500);
        setTimeout(() => this.onProceed(), 5000);
    }

    onProcessing() {
        this.processing.style.top = '0';
        this.pay.style.top = '80px';
    }

    onSuccess() {
        this.success.style.top = '0';
        this.processing.style.top = '80px';
    }

    onProceed() {
        this.success.style.color = '#fff';
        this.proceed.style.top = '0';
    }
}

export default ngStatus;
