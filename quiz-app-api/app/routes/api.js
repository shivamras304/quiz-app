// # API routes
/*jshint esversion: 6 */
let express = require("express"),
  api = require("../controllers"),
  apiRoutes;
let path = require("path");
let wrapper = require("../controllers/wrapper.js");

apiRoutes = function (router) {
  router = express.Router();

  router.get('/users/test', api.user.test)
  router.get('/users', (req, res) => api.user.list(req, res))
  router.post('/users', (req, res, next) => {
    // Only allow this route if the boolean DEV_MODE is present & true in request body
    if (!req.body.DEV_MODE) {
      res.status(403).json({
        message: 'This route is for Dev Mode only. Create New users via users/signup',
        code: 'OFDM'
      })
    } else {
      next()
    }
  }, (req, res) => api.user.create(req, res))
  router.get('/users/:_id', (req, res) => api.user.show(req, res))
  router.patch('/users/:_id', (req, res) => api.user.update(req, res))
  router.delete('/users/:_id', (req, res) => api.user.delete(req, res))
  router.post('/users/signup', (req, res) => api.user.signup(req, res))
  router.post('/users/login', (req, res) => api.user.login(req, res))


  // Quiz controller
  router.get("/quiz/test", (req, res) => {
    api.quiz.test(req, res);
  });
  router.post("/quiz", (req, res) => {
    api.quiz.create(req, res);
  });
  router.get("/quiz", (req, res) => {
    api.quiz.list(req, res);
  });
  router.get("/quiz/:_id", (req, res) => {
    api.quiz.show(req, res);
  });
  router.put("/quiz/:_id", (req, res) => {
    api.quiz.update(req, res);
  });
  router.delete("/quiz/:_id", (req, res) => {
    api.quiz.delete(req, res);
  });

  // Category controllercategory
  router.post("/category", (req, res) => api.category.create(req, res))
  router.get("/category/:_id", (req, res) => api.category.show(req, res));
  router.put("/category/:_id", (req, res) => api.category.update(req, res));
  router.get("/category", (req, res) => api.category.list(req, res));
  router.delete("/category/:_id", (req, res) => api.category.delete(req, res));

  // Questions Controller
  router.get("/question", api.question.read);
  router.post("/question", api.question.create);
  router.put("/question", api.question.update);
  router.delete("/question", api.question.delete);
  // ==================
  router.get("/question/randomQuestion", api.question.randomQuestion);
  router.get("/question/generatedQuestions", api.question.generatedQuestions);
  router.get("/question/nextQuestion", api.question.nextQuestion);

  //Teams Controller
  router.post("/team", api.team.create);
  router.get("/team", api.team.list);
  router.delete("/team/:_id", api.team.delete);
  router.put("/team/:_id", api.team.update);
  router.get("/team/:_id", api.team.show);

  return router;
};

module.exports = apiRoutes;