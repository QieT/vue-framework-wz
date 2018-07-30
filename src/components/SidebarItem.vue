<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <ul class="nav">
                <template v-for="item in routes">
                    <router-link tag="li" class="nav-item nav-dropdown"
                                 v-if="!item.hidden&&item.children&&item.children.length>0"
                                 :to="item.path+''+item.children[0].path" disabled>


                        <div class="nav-link nav-dropdown-toggle" @click="handleClick">
                            <Icon :type="item.icon" color="#448AFF"/>
                            {{ item.name}}
                        </div>
                        <ul class="nav-dropdown-items">
                            <template v-for="child in item.children">
                                <!-- <router-link :to="child.path+'/'+item.children[0].path" class="nav-link" ><i class="icon-puzzle"></i> {{ child.name}} </router-link> -->
                                <router-link tag="li" :to="item.path+'/'+child.path+'/'+child.children[0].path" class="nav-item nav-dropdown"
                                             v-if="!child.hidden&&child.children">
                                    <div class="nav-link nav-dropdown-toggle" @click="handleClick">
                                        <Icon :type="child.icon" color="#448AFF"/>
                                        {{ child.name}}
                                    </div>
                                    <ul class="nav-dropdown-items">
                                        <li class="nav-item" v-for="children in child.children" v-if='!children.hidden'
                                            @click="addActive">
                                            <router-link
                                                    :to="item.path+'/'+child.path+children.path+'/'+children.children[0].path"
                                                    class="nav-link" v-if="!children.hidden&&children.children">
                                                <Icon :type="children.icon" color="#448AFF"/>
                                                {{ children.name}}
                                            </router-link>
                                            <router-link :to="item.path+'/'+child.path+'/'+children.path" class="nav-link"
                                                         v-else="!children.children">
                                                <Icon :type="children.icon" color="#448AFF"/>
                                                {{ children.name}}
                                            </router-link>
                                        </li>
                                    </ul>
                                </router-link>
                                <li class="nav-item" v-else='!child.hidden' @click="addActive">
                                    <router-link :to="item.path+'/'+child.path" class="nav-link">
                                        <Icon :type="child.icon" color="#448AFF"/>
                                        {{ child.name}}
                                    </router-link>
                                </li>
                            </template>
                        </ul>
                    </router-link>

                    <li class="nav-item" v-if="!item.hidden&&!item.children">
                        <router-link :to="item.path" class="nav-link" exact>
                            <Icon :type="item.icon" color="#448AFF"/>
                            {{ item.name}}
                        </router-link>
                    </li>

                </template>
            </ul>
        </nav>
    </div>
</template>

<script>

    export default {
        name: 'SidebarItem',
        props: {
            routes: {
                type: Array
            }
        },
        methods: {
            handleClick(e) {
                e.preventDefault()
                e.target.parentElement.classList.toggle('open')
            },
            addActive(e) {
                e.preventDefault()
                e.target.parentElement.parentElement.parentElement.classList.add('open')
            }
        },
        mounted() {
            console.log(this.routes)
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .wscn-icon {
        margin-right: 10px;
    }

    .hideSidebar .menu-indent {
        display: block;
        text-indent: 10px;
    }
</style>

