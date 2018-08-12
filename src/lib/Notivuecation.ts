import NotificationType from './NotificationType';
import events from './events';
import Notification from './Notification.vue';
import { createNotifyParams } from './utils';
import { IINotificationLabels, INotificationData, INotifyParams, IOptions } from './interface';

// main methods
export function notify(params: INotifyParams): Promise<any> {
  const data: INotificationData = { ...params };
  return new Promise(resolve => {
    data.resolve = resolve;
    eventBus.$emit(events.SHOW_NOTIFICATION, data);
  }).then(result => {
    eventBus.$emit(events.HIDE_NOTIFICATION, data);
    return result;
  });
}

export function confirm(param: IINotificationLabels | string): Promise<any> {
  return notify(createNotifyParams(param, NotificationType.CONFIRM));
}
export function alert(param: IINotificationLabels | string): Promise<any> {
  return notify(createNotifyParams(param, NotificationType.ALERT));
}

export let eventBus: any; // todo type?

const defaultOptions: IOptions = {
  addMethodsToVue: true,
  componentName: 'notivuecation',
};

export default {
  install(Vue, userOptions: IOptions = {}) {
    // todo type vue?
    const options = Object.assign({}, defaultOptions, userOptions);

    eventBus = new Vue();

    if (options.addMethodsToVue) {
      Vue.prototype.$alert = alert;
      Vue.prototype.$confirm = confirm;
      Vue.prototype.$notify = notify;
    }

    // register the default component
    Vue.component(options.componentName, Notification);
  },
};
