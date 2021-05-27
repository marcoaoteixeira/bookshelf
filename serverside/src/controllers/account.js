import accountService from "../services/account";

export default {
  auth: function (request, response, next) {
    accountService
      .authenticate(request.body)
      .then((user) => response.json(user))
      .catch(next);
  },
};
