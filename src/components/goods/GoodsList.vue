<template>
  <div class="goods-list">
    <div class="goods-item">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577168743992&di=96d3e1281313d55e916656dd191681ca&imgtype=0&src=http%3A%2F%2Fimg.game333.net%2Fuploads%2Fnewshouyou%2F2018%2F01%2F18%2F584_20180118113945959.png"
        alt
      />
      <h1 class="title">小米手机 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥2199</span>
          <span class="old">¥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577168743992&di=96d3e1281313d55e916656dd191681ca&imgtype=0&src=http%3A%2F%2Fimg.game333.net%2Fuploads%2Fnewshouyou%2F2018%2F01%2F18%2F584_20180118113945959.png"
        alt
      />
      <h1 class="title">小米手机 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥2199</span>
          <span class="old">¥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577168743992&di=96d3e1281313d55e916656dd191681ca&imgtype=0&src=http%3A%2F%2Fimg.game333.net%2Fuploads%2Fnewshouyou%2F2018%2F01%2F18%2F584_20180118113945959.png"
        alt
      />
      <h1 class="title">小米手机 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥2199</span>
          <span class="old">¥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .goods-item:last-child {
    margin-left: 3px;
  }
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &:after {
    content: "";
    flex: auto;
  }
}
</style>