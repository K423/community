<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="最新主题" name="latest">
            <article v-for="(item, index) in articleList" :key="index" class="media">
              <div class="media-left">
                <div style="width: 48px; height: 48px; display: flex; align-items: center;">
                  <!-- <img :src="`https://cn.gravatar.com/avatar/${item.userId}?s=164&d=monsterid`"
                    style="border-radius: 5px;"> -->
                  <!-- <img :src="`https://ui-avatars.com/api/?name=${item.username}&length=3&background=random&size=164&font-size=0.33&color=random&rounded=true`"
                    style="border-radius: 5px;"> -->
                  <img :src="item.avatar" style="border-radius: 5px; width: 48px;">
                </div>
              </div>
              <div class="media-content">
                <div class="">
                  <p class="ellipsis is-ellipsis-1">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                      <router-link :to="{ name: 'post-detail', params: { id: item.id } }">
                        <span class="is-size-6">{{ item.title }}</span>
                      </router-link>
                    </el-tooltip>
                  </p>
                </div>
                <nav class="level has-text-grey is-mobile  is-size-7 mt-2">
                  <div class="level-left">
                    <div class="level-left">
                      <router-link class="level-item" :to="{ path: `/member/${item.username}/home` }">
                        {{ item.alias }}
                      </router-link>

                      <span class="mr-1">
                        发布于:{{ dayjs(item.createTime).format("YYYY/MM/DD") }}
                      </span>

                      <span v-for="(tag, index) in item.tags" :key="index"
                        class="tag is-hidden-mobile is-success is-light mr-1">
                        <router-link :to="{ name: 'tag', params: { name: tag.name } }">
                          {{ "#" + tag.name }}
                        </router-link>
                      </span>

                      <span class="is-hidden-mobile">浏览:{{ item.view }}</span>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="media-right" />
            </article>
          </el-tab-pane>
          <el-tab-pane label="热门主题" name="hot">
            <article v-for="(item, index) in articleList" :key="index" class="media">
              <div class="media-left">
                <div style="width: 48px; height: 48px; display: flex; align-items: center;">
                  <img :src="item.avatar" style="border-radius: 5px; width: 48px;">
                </div>
              </div>
              <div class="media-content">
                <div class="">
                  <p class="ellipsis is-ellipsis-1">
                    <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                      <router-link :to="{ name: 'post-detail', params: { id: item.id } }">
                        <span class="is-size-6">{{ item.title }}</span>
                      </router-link>
                    </el-tooltip>
                  </p>
                </div>
                <nav class="level has-text-grey is-mobile  is-size-7 mt-2">
                  <div class="level-left">
                    <div class="level-left">
                      <router-link class="level-item" :to="{ path: `/member/${item.username}/home` }">
                        {{ item.alias }}
                      </router-link>

                      <span class="mr-1">
                        发布于:{{ dayjs(item.createTime).format("YYYY/MM/DD") }}
                      </span>

                      <span v-for="(tag, index) in item.tags" :key="index"
                        class="tag is-hidden-mobile is-success is-light mr-1">
                        <router-link :to="{ name: 'tag', params: { name: tag.name } }">
                          {{ "#" + tag.name }}
                        </router-link>
                      </span>

                      <span class="is-hidden-mobile">浏览:{{ item.view }}</span>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="media-right" />
            </article>
          </el-tab-pane>
        </el-tabs>
      </div>

      <!--分页-->
      <pagination v-show="page.total > 0" :total="page.total" :page.sync="page.current" :limit.sync="page.size"
        @pagination="init" />

    </el-card>
  </div>
</template>
  
<script>
// @ is an alias to /src

import { getList } from '@/api/post';
import Pagination from '@/components/Pagination'

export default {
  name: 'TopicListView',
  components: { Pagination },
  data() {
    return {
      activeName: 'latest',
      articleList: [],
      page: {
        current: 1,
        size: 10,
        total: 0,
        tab: 'latest'
      }
    }
  },
  created() {
    this.init(this.tab)
  },
  methods: {
    init(tab) {
      getList(this.page.current, this.page.size, tab).then((res) => {
        const { data } = res
        this.page.current = data.current
        this.page.total = data.total
        this.page.size = data.size
        this.articleList = data.records
      })
    },
    handleClick(tab) {
      this.page.current = 1
      this.init(tab.name)
    }
  }
}
</script>
  