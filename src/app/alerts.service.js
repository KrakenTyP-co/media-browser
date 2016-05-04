export default class AlertsService {

    // @ngInject
    constructor($timeout) {
        this.$timeout = $timeout;
        this.alerts = [];
    }

    addAlert(message = 'Action done', type = 'success') {
        this.alerts.push({
            message: message,
            type: type
        });
        this.$timeout(() => {
            this.alerts.shift();
        }, 5000);
    }
}