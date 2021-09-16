<template>
  <survey :survey="survey" />
</template>

<script>
import * as Survey from "survey-vue";

import "survey-vue/survey.css";

Survey.StylesManager.applyTheme("default");
Survey.surveyLocalization.supportedLocales = ["en", "es"];

export default {
  name: "SurveyForm",
  data() {
    const json = {
      surveyId: 'df0e3d60-b923-4f49-8898-fda93ce9b7cd',
      surveyPostId: '4ae8a4fa-6768-4489-b93b-b35186b80c7f'
    };
    const survey = new Survey.Model(json);
    survey.surveyShowDataSaving = true;
    survey.onComplete.add(function (sender) {
        //var mySurvey = sender;
        var surveyData = sender.data;
        console.log(surveyData);
        console.log('holaaaa')
    });

    return {
      survey: survey,

      
    };
  },
};
</script>

<style scoped>
</style>
