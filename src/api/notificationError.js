import { notification } from 'antd'

// eslint-disable-next-line import/prefer-default-export
export const notificationError = (message) => {
  notification.error({
    message: 'Ошибка',
    description: message,
    placement: 'topRight',
  })
}
