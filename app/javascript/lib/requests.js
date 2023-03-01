import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export const indexChats = function(successCB, errorCB) {
  const request = {
    type: 'GET',
    url: 'api/chats',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export const postChat = function(message, name, successCB, errorCB) {
  const request = {
    type: 'POST',
    url: 'api/chats',
    data: {
      chat: {
        message: message,
        name: name,
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};
