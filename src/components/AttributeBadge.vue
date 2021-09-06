<template>
  <div class="card" :style="getBorderColor">
    <div class="header" :style="getHeaderColor">
      {{ headerText }}
    </div>
    <div class="body">
      <div class="title">
        {{ titleText }}
      </div>
      <div class="grade" :style="getGradeColor">
        {{ getGrade }}
      </div>
    </div>
    <div class="footer">
      {{ footerText }}
    </div>
  </div>
</template>

<script lang="ts">
  import {Prop} from "vue-property-decorator";
  import {Options, Vue} from "vue-class-component";

  // school grades list, converted by type and rating
  const gradesModel = [
    {number: 1, text: "sehr gut"},
    {number: 2, text: "gut"},
    {number: 3, text: "befriedigend"},
    {number: 4, text: "ausreichend"},
    {number: 5, text: "mangelhaft"},
    {number: 6, text: "ungenügend"},
  ];

  @Options({
    name: "attribute-badge",
  })

  export default class AttributeStars extends Vue {
    @Prop({default: "text"}) type!: string;  // 'text' or 'number'
    @Prop() rating!: number;
    @Prop({default: "#f00"}) color!: string;

    private headerText = "AUSZEICHNUNG"; // header text
    private titleText = "Unsere Bewertung"; // title text
    private footerText = ('0' + (new Date().getMonth() + 1)).slice(-2) + "/" + new Date().getFullYear().toString(); // footer text

    /*
      get: header background style
    */
    get getHeaderColor(): string {
      return "background: " + this.color;
    }

    /*
      get: border style
    */
    get getBorderColor(): string {
      return "border: 3px solid" + this.color;
    }

    /*
      get: grade text style
    */
    get getGradeColor(): string {
      return "color: " + this.color;
    }

    /*
      get: grade by type and rating
      if type is number, return one value of [1, 2, 3, 4, 5, 6] by rating
      if type is text, return one text of ['sehr gut', 'gut', 'befriedigend', 'ausreichend', 'mangelhaft', 'ungenügend'] by rating
    */
    get getGrade(): any {
      let ratingValue = null;

      switch (true) {
        case this.rating >= 90 && this.rating <= 100:
          ratingValue = 0;
          break;
        case this.rating >= 70 && this.rating <= 89:
          ratingValue = 1;
          break;
        case this.rating >= 50 && this.rating <= 69:
          ratingValue = 2;
          break;
        case this.rating >= 30 && this.rating <= 49:
          ratingValue = 3;
          break;
        case this.rating >= 20 && this.rating <= 29:
          ratingValue = 4;
          break;
        case this.rating >= 1 && this.rating <= 19:
          ratingValue = 5;
          break;
        default:
          ratingValue = null;
      }

      if (typeof ratingValue === "number")
        if (this.type === "number")
          return gradesModel[ratingValue].number;
        else
          return gradesModel[ratingValue].text;
      return null;
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    width: 200px;
    height: 200px;

    .header {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }

    .body {
      width: 100%;
      height: calc(100% - 40px - 36px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 18px;
      }

      .grade {
        font-size: 25px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }

    .footer {
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      background: #FCFAFA;
      border-top: 1px solid #ddd;
    }
  }
</style>
