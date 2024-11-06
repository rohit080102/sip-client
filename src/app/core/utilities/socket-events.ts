class SocketEvents {
  public INITIALIZE: string = 'init';
  public ON_CONNECTED: string = 'connector';
  public ON_ADMIN_LOGIN: string = 'elseLogin';
  public ON_NEW_CHAT_DATA: string = 'on_new_chat_data';
  public ON_NEW_ADMIN_CHAT_DATA: string = 'on_new_admin_chat_data';
  public ON_MESSAGE_SEEN: string = 'on_message_seen';
  public ON_NEW_RETAILER_CREATE :string= 'on_new_retailer_create';
}

export let socketEvent = new SocketEvents();
