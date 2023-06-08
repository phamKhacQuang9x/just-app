import * as React from 'react';
import { confirmOtp } from './confirm_otp';
import { email, emailGradient } from './email';
import { generalIcons } from './general';
import { lock, lockGradient } from './lock';

import { cart } from './card';
import { drink } from './category/drinks';
import { freshFood } from './category/freshFood';
import { fruit } from './category/fruit';
import { specialties } from './category/specialties';
import { chevronDown } from './chevron_down';
import { chevronRight } from './chevron_right';
import { chevronUp, chevronUp_1 } from './chevron_up';
import { close } from './close';
import { currentLocation } from './currentLocation';
import { exchangeGood } from './ExchangeGood';
import { exchangeRate } from './ExchangeRate';
import { location } from './location';
import { deposit, depositActive } from './mainTabIcon/deposit';
import { market, marketActive } from './mainTabIcon/market';
import { news, newsActive } from './mainTabIcon/news';
import { profile, profileActive } from './mainTabIcon/profile';
import { phone, phoneGradient } from './phone';
import { phoneDeposit } from './phoneDeposit';
import { plus } from './plus';
import { sale } from './sale';
import { search } from './search';
import { selectMap } from './selectMap';
import { OuterProps } from './types';
import { user, userGradient } from './user';
import { wallet } from './wallet';

import { checked } from './checked';
import { comment } from './comment';
import { copy } from './copy';
import { deleteIcon } from './delete';
import { deliveryCancel } from './deliveryStatus/deliveryCancel';
import { deliveryPendingConfirm } from './deliveryStatus/DeliveryPendingConfirm';
import { deliveryPreparing } from './deliveryStatus/deliveryPreparing';
import { deliveryRunning } from './deliveryStatus/deliveryRunning';
import { edit } from './edit';
import { like } from './like';
import { love } from './love';
import { loveActive } from './loveActive';
import { minus } from './minus';
import { send } from './send';
import { share } from './share';
import { voucher } from './voucher';
import { voucherTicket } from './voucher_ticket';
import { markAll } from './markAll';
import { notification } from './mainTabIcon/notification/notification';
import { notiActive } from './mainTabIcon/notification/notificationActive';
import { discount } from './discount';
import { point } from './point';
import { smallBuy } from './smallBuy';
import { smallDiscount } from './smallDiscount';
import { buy } from './buy';
import { check } from './check';
import { fail } from './fail';
import { clock } from './clock';
import { closeCircle } from './closeCircle';
import { setting } from './setting';
import { vietnamFlag } from './vietnamFlag';
import { fastfood } from './fastfood';
import { recruit } from './recruit';
import { book } from './book';
import { likeActive } from './likeActive';
import { success } from './success';
import { rightLike } from './rightLike';
import { note } from './note';
import { calendar } from './calendar';
import { route } from './route';
import { services } from './services';
import { usual } from './usual';
import { history } from './history';
import { customer } from './customer';
import { marker } from './marker';

export const mapIcon = {
  [generalIcons.PHONE]: phone,
  [generalIcons.PHONE_GRADIENT]: phoneGradient,
  [generalIcons.LOCK]: lock,
  [generalIcons.LOCK_GRADIENT]: lockGradient,
  [generalIcons.USER]: user,
  [generalIcons.USER_GRADIENT]: userGradient,
  [generalIcons.EMAIL]: email,
  [generalIcons.EMAIL_GRADIENT]: emailGradient,
  [generalIcons.CONFIRM_OTP]: confirmOtp,
  [generalIcons.LOCATION]: location,
  [generalIcons.SEARCH]: search,
  [generalIcons.SELECT_MAP]: selectMap,
  [generalIcons.CURRENT_LOCATION]: currentLocation,
  [generalIcons.CHEVRON_RIGHT]: chevronRight,
  [generalIcons.EXCHANGE_RATE]: exchangeRate,
  [generalIcons.EXCHANGE_GOOD]: exchangeGood,
  [generalIcons.LIKE]: like,
  [generalIcons.SHARE]: share,
  [generalIcons.COMMENT]: comment,
  [generalIcons.SEND]: send,
  [generalIcons.EDIT]: edit,
  [generalIcons.DELETE]: deleteIcon,
  [generalIcons.COPY]: copy,
  [generalIcons.LOVE]: love,
  [generalIcons.LOVEACTIVE]: loveActive,
  [generalIcons.MARK_ALL]: markAll,
  [generalIcons.DISCOUNT]: discount,
  [generalIcons.BUY]: buy,
  [generalIcons.POINT]: point,
  [generalIcons.SMALL_BUY]: smallBuy,
  [generalIcons.SMALL_DISCOUNT]: smallDiscount,
  [generalIcons.CHECK]: check,
  [generalIcons.FAIL]: fail,
  // bottom tab Icon
  [generalIcons.DEPOSIT]: deposit,
  [generalIcons.DEPOSIT_ACTIVE]: depositActive,
  [generalIcons.NEWS]: news,
  [generalIcons.NEWS_ACTIVE]: newsActive,
  [generalIcons.MARKET]: market,
  [generalIcons.MARKET_ACTIVE]: marketActive,
  [generalIcons.NOTIFICATION]: notification,
  [generalIcons.NOTIFICATION_ACTIVE]: notiActive,
  [generalIcons.PROFILE]: profile,
  [generalIcons.PROFILE_ACTIVE]: profileActive,
  // bottom tab Icon
  [generalIcons.PHONE_DEPOSIT]: phoneDeposit,
  [generalIcons.WALLET]: wallet,
  [generalIcons.CART]: cart,
  [generalIcons.DRINKS]: drink,
  [generalIcons.FRESH_FOOD]: freshFood,
  [generalIcons.FRUIT]: fruit,
  [generalIcons.SPECIALTIES]: specialties,
  [generalIcons.SALE]: sale,
  [generalIcons.CHEVRON_UP]: chevronUp,
  [generalIcons.CHEVRON_UP_1]: chevronUp_1,
  [generalIcons.CHEVRON_DOWN]: chevronDown,
  [generalIcons.CLOSE]: close,
  [generalIcons.PLUS]: plus,
  [generalIcons.MINUS]: minus,
  [generalIcons.CHECKED]: checked,
  // delivery
  [generalIcons.DELIVERY_STATUS_PENDING_CONFIRM]: deliveryPendingConfirm,
  [generalIcons.DELIVERY_STATUS_PREPARING]: deliveryPreparing,
  [generalIcons.DELIVERY_STATUS_RUNNING]: deliveryRunning,
  [generalIcons.DELIVERY_STATUS_CANCEL]: deliveryCancel,
  //
  [generalIcons.VOUCHER]: voucher,
  [generalIcons.VOUCHER_TICKET]: voucherTicket,
  [generalIcons.CLOCK]: clock,
  [generalIcons.CLOSE_CIRCLE]: closeCircle,
  [generalIcons.SETTING]: setting,
  [generalIcons.VIETNAM_FLAG]: vietnamFlag,
  [generalIcons.FAST_FOOD]: fastfood,
  [generalIcons.RECRUIT]: recruit,
  [generalIcons.BOOK]: book,
  [generalIcons.LIKE_ACTIVE]: likeActive,
  [generalIcons.SUCCESS]: success,
  [generalIcons.RIGHT_LIKE]: rightLike,
  [generalIcons.NOTE]: note,
  [generalIcons.CALENDAR]: calendar,
  [generalIcons.ROUTE]: route,
  [generalIcons.SERVICE]: services,
  [generalIcons.USUAL]: usual,
  [generalIcons.HISTORY]: history,
  [generalIcons.CUSTOMER]: customer,
  [generalIcons.MARKER]: marker,
};

export const getIconComponent = (
  iconName: string,
  props: OuterProps,
): React.ReactElement => {
  return mapIcon[iconName]
    ? React.createElement(mapIcon[iconName], props)
    : React.createElement(phone, props);
};
