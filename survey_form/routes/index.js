module.exports = function Route(app){
  app.get('/', function(req,res){
    res.render('main');
  });
  app.post('/result', function(req, res){
    survey_info = {
      name: req.body.name,
      dojo_location: req.body.dojo_location,
      favorite_language: req.body.favorite_language,
      comment: req.body.comment
    };
    console.log(survey_info)
    res.render("result",{user_data:survey_info});
  });
};
