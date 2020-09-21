<template>
  <div id="course-list">
    <!-- 选择年级 -->
    <router-link :to="{name: 'm-gradeList'}">
      <div class="grade-active">
        <span>{{gradeId | gradeToNameFilter}}</span>
        <Icon name="arrow-down" />
      </div>
    </router-link>
    <!-- 选择学科列表 -->
    <Tabs v-model="subjectActive" 
      v-if="subjectList.length > 0"
      sticky
      class="subject-list" 
      color="#FB4B09" 
      line-width="20px" 
      line-height="2px" 
      title-active-color="#333333" 
      title-inactive-color="#999999"
      :ellipsis="false"
      @change="changeFunc">
      <div class="swiper-box">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id" @click="bannerJumpFunc(item)">
            <van-image :src="item.img_url" class="images" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 满分班级/专属服务老师 -->
      <div class="btn-group">
        <router-link :to="{name: 'm-introduce'}">
          <div class="btns">
            <svg-icon class="icon" name="icon-shipin"></svg-icon>
            <span>了解满分班</span>
          </div>
        </router-link>
        <router-link :to="{name: 'm-mine-help'}">
          <div class="btns">
            <svg-icon class="icon" name="icon-zhuanshufuwu"></svg-icon>
            <span>专属服务老师</span>
          </div>
        </router-link>
      </div>
      <van-empty description="该学科暂无适合您的课程" v-if="list.length === 0" />
      <Tab :title="sItem.name" v-for="sItem in subjectList" :key="sItem.id">
        <div class="t-body">
          <div class="c-list">
            <router-link  v-for="(item, index) in list" :key="index"  :to="{name: 'm-courseDetail', params: { id: item.id}}">
              <course-item :detail="item">
                <div slot="bot-right" class="bot-right">
                  <!-- 当用户未购买且不是0元课 -->
                  <p class="price-group" v-if="item.type !== 3 && !item.buy">
                    <span class="fuhao">¥ </span>
                    <span class="price">{{item.price}}</span>
                    <span class="old">{{item.amount}}</span>
                  </p>
                  <!-- 当前是0元课 -->
                  <p class="tips" v-if="item.type === 3 && !item.buy">免费报名</p>
                  <p class="tips" v-if="item.buy">已购买</p>
                </div>
              </course-item>
            </router-link>
          </div>
        </div>
      </Tab>
    </Tabs>
    <Tabbar />
  </div>
</template>
<script>
import course from '@c/mixin/course'
import Tabbar from '@m/components/Tabbar/index.vue'
import CourseItem from '@m/components/Course/CourseItem.vue'
import { Icon, Tab, Tabs, Swipe as VanSwipe, SwipeItem as VanSwipeItem, Image as VanImage, Empty as VanEmpty } from 'vant'

export default {
  name: 'courseList',
  components: { Tabbar, CourseItem, Icon, Tab, Tabs, VanSwipe, VanSwipeItem, VanImage, VanEmpty },
  mixins: [course],
  methods: {
    changeFunc (index) {
      this.changeSubject(index)
    },
    bannerJumpFunc (data) {
      if (data.type === 1) {
        window.location.href = data.link
      }
    }
  }
}
</script>
<style lang="scss" scoped>

.subject-list/deep/.van-tab--active {
  font-weight: bold;
  font-size: 36px;
}
.icon {
  font-size: 48px;
}
#course-list {
  padding-bottom: 100px;
  .swiper-box {
    padding: 30px;
    .my-swipe .van-swipe-item {
      width: 100%;
      height: 260px;
      border-radius: 16px;
      overflow: hidden;
      .images {
        width: 100%;
        height: 100%;
      }
    }
  }
  .grade-active {
    width: 100%;
    padding: 0 30px;
    display: flex;
    font-size: 28px;
    height: 92px;
    align-items: center;
    color: #333333;
    background: #ffffff;
    span {
      margin-right: 6px;
    }
  }
  .subject-list {
    background: #F7F8FA;
    padding-bottom: 30px;
    .btn-group {
      width: 100%;
      padding: 30px;
      display: flex;
      justify-content: space-between;
      .btns {
        flex-shrink: 0;
        flex-grow: 0;
        width: 336px;
        height: 100px;
        border-radius: 16px;
        box-shadow: 0px 0px 16px 0px rgba(229, 229, 229, 0.5);
        font-size: 28px;
        color: #333333;
        display: flex;
        align-items: center;
        background: #ffffff;
        justify-content: center;
        span {
          margin-left: 4px;
        }
      }
    }
    .t-body {
      width: 100%;
      padding: 0 30px;
      .c-list {
        width: 100%;
        .bot-right {
          .tips {
            color: #FB4B09;
            font-size: 28px;
          }
          .price-group {
            font-family: DIN Alternate;
            font-weight: bold;
            color: #EB2323;
            .fuhao {
              font-size: 26px;
            }
            .price {
              font-size: 48px;
            }
            .old {
              color: #999999;
              font-size: 24px;
              margin-left: 10px;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>