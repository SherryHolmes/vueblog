<template>
  <div>
    <div class="pannal-board">
      <div class="title">
        <div>漫画</div>
      </div>
      <div style="height: 500px;">
        <Row type="flex" justify="space-around">
          <template v-for="index in 12 ">
            <Col :xs="12" :sm="8" :md="6" :lg="6">
            <div style="margin: 1%; width: 98%; padding: 1%; border: 1px solid black;">
              <Input type="textarea" readonly :placeholder="index"
                     :autosize="{minRows: 1,maxRows: 20}"> </Input>
              <Button class="request">回复</Button>
            </div>
            </Col>
          </template>
        </Row>
      </div>
    </div>
    <div class="pannal-board">
      <div class="title">
        <div>视频</div>
      </div>
      <div>
        <Row type="flex" justify="space-around">
          <template v-for="index in 12 ">
            <Col :xs="12" :sm="8" :md="6" :lg="6">
            <div style="margin: 1%; width: 98%; padding: 1%; border: 1px solid black;">
              <Input type="textarea" readonly :placeholder="index"
                     :autosize="{minRows: 1,maxRows: 20}"> </Input>
              <Button class="request">回复</Button>
            </div>
            </Col>
          </template>
        </Row>
      </div>

    </div>

  </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },

  }
</script>


<style scoped>
  .pannal-board {
    margin: 2%;
    background: #f3f3f3;
    border-radius: 4px;
    overflow: hidden;
  }

</style>
