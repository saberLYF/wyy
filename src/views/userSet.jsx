import styled from 'styled-components-vue'
import Vue from 'vue';
import { Tab, Tabs, Area, Popup, Calendar, Cell, CellGroup, DatetimePicker } from 'vant';
import { areaList } from '@vant/area-data';
import { getUserAccount, getUserDetail, getUserBinding, getUserPlaylist, getUserHistory, getSong, getUserSubcount, setUser, getNickname, } from '@/request/index'
import { forEach } from 'lodash';
import _ from "lodash";
import '@/views/css/userSet.less'
Vue.use(Area);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
Vue.use(Calendar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(DatetimePicker)
const vanArea = styled.section`
.van-area{
    height:57vw;
    margin-top:9vw;
}
.van-picker__columns {
    height:57vw;
}
.van-picker__toolbar{
    position: absolute;
    bottom: -14vw;
    right: 0;
    z-index: 9;
}
.van-picker-column {
    height:57vw
}
.van-picker__cancel,
.van-picker__confirm {
    color:#e24b49;
    font-size:3vw;
    font-weight: 500;
}
.van-picker-column{
    font-size:3vw;
    font-weight: 500;
}
.van-picker-column__item--selected {
    color:#e24b49;
}
`
const vanpopup = styled.section`
.van-popup {
    background-color:rgba(0,0,0,0);
}
`
const vantabs = styled.section`
.van-tabs__nav {
  width:60%

}
.van-tab__text{
    font-size:4vw;
}
.van-tabs__wrap {
    display:flex;
    justify-content: center;
    font-weight: 600;
    margin-top:2vw;
}
.van-tab__text--ellipsis {
    font-weight: 750;
}
`
// 头部大图盒子
const Wrap = styled.div`
position: relative;
:after{
    width: 140%;
    height: 60vw;
    /* left: -20%; */
    top: 0;
    z-index: 0;
    content: '';
    background:url(${props => props.backgroundUrl == undefined ? '' : props.backgroundUrl});
    background-repeat: no-repeat;
    background-size:100% 60vw;
    background-position: contain;
    position: absolute;
    border-radius: 0 0 45% 45%;
}
width: 100%;
height: 60vw;
display: flex;
justify-content: center;
align-items: flex-start;
padding:4vw;
`
//卡片盒子
const Card = styled.div`
    width:92vw;
    margin-left:4vw;
    margin-right:4vw;
    margin-top:${(props) => props.mt || "0"};
    padding:5vw 4vw 3vw 4vw;
    background-color: #fff;
    border-radius: 2vw;
    z-index: 99;
    position:relative;
    transition: all .5s;
    :after{
        z-index:1;
    }
`

export default {
    render() {
        return <div class=" w-screen relative overflow-hidden  bg-[#f5f5f5] pb-[8vw]">
            {this.isLoading == true ? (
            <header class="w-screen h-[13.5vw] p-[4vw] fixed top-0 z-[100]" id='head'>
                <div class="flex justify-between items-center ">
                    <div class="flex items-center">
                        <span onClick={this.toIndex}>
                            <Icon icon="ph:arrow-left-light" color={this.color} class="w-[5vw] h-[5vw] mr-[2vw]" />
                        </span>
                        <span class="text-[3.5vw] font-[700]">{this.name}</span>
                    </div>
                    <Icon icon="ri:more-2-fill" color={this.color} class="w-[5vw] h-[5vw] " />
                </div>
            </header>
             ) : ('')}
            {this.isLoading == true ? (
                <Wrap class="bg-[#baaa8c] h-[50vw] flex justify-center items-start p-[4vw] relative "
                    backgroundUrl={this.user.profile.backgroundUrl == undefined ? '' : this.user.profile.backgroundUrl}
                >
                    <div class="flex justify-between items-center z-[1] w-[20svw]">
                        <span class="text-[2vw] px-[1.25vw] py-[.5vw] rounded-[3vw] flex justify-center items-center bg-[#fff] scale-90">照片墙</span>
                        <span class="rounded-[50%] w-[3vw] h-[3vw] bg-[#ddd9d0]"></span>
                        <span class="rounded-[50%] w-[2vw] h-[2vw] bg-[#ddd9d0]"></span>
                    </div>
                    <div class="absolute bottom-[10vw] right-[4vw] w-[20vw] z-[1] h-[7vw] rounded-[4vw] flex items-center justify-center  border-[.55vw] border-[#ffffff66] border-solid bg-[#22222280]">
                        <span class="text-[2vw] text-[#fff]">他的照片</span>
                    </div>
                </Wrap>
            ) : ('')}
            {this.isLoading == true ? (
                <Card mt="-7vw">
                    <div class="flex justify-center items-center flex-col">
                        <div class="w-[17vw] h-[17vw] rounded-[50%] mt-[-10vw]" id="userImg" style={{ backgroundImage: `url(${this.user.profile.avatarUrl})`, backgroundSize: '100%', backgroundRepeat: "no-repeat" }}></div>
                        <p class="text-[5vw] font-[700] mt-[3vw] mb-[4vw]" id='userName'>{this.user.profile.nickname}</p>
                        <p class="text-[2.5vw] font-[550] text-[#7b7b7b] mb-[4vw] flex justify-center items-center">
                            {this.detail.profile.follows} 关注
                            <span class="border-solid h-[3vw] w-[.05vw] border-[.05vw] border-[#ccccccb3] mx-[3vw]"></span>
                            {this.detail.profile.followeds} 粉丝
                            <span class="border-solid h-[3vw] w-[.05vw] border-[.05vw] border-[#ccccccb3] mx-[3vw]"></span>
                            Lv.{this.detail.level}
                        </p>
                        <div class="w-[100%] flex justify-center items-center">
                            <div class="mr-[1.5vw] rounded-[1vw] px-[2vw] text-[2.5vw] font-[525] border-[#ccc] border-[.1vw] border-solid">
                                IP: {this.areaList.province_list[this.detail.profile.province].replace(/省|市/g, '')}
                            </div>
                            <div class="mr-[1.5vw] flex items-center rounded-[1vw] px-[2vw] text-[2.5vw] font-[525] border-[#ccc] border-[.1vw] border-solid">
                                {this.detail.profile.gender == 1 ? (<Icon icon="ri:men-line" color="#54aae0" class="w-[3vw] h-[3vw]" />) : (
                                    <Icon icon="ant-design:woman-outlined" color="pink" class="w-[3vw] h-[3vw]" />
                                )}
                                &nbsp;
                                {this.birth}
                            </div>
                            <div class="mr-[1.5vw] rounded-[1vw] px-[2vw] text-[2.5vw] font-[525] border-[#ccc] border-[.1vw] border-solid">
                                {this.areaList.province_list[this.detail.profile.province].replace(/省|市/g, '')} {this.areaList.city_list[this.detail.profile.city].replace(/省|市/g, '')}
                            </div>
                            <div class="mr-[1.5vw] rounded-[1vw] px-[2vw] text-[2.5vw] font-[525] border-[#ccc] border-[.1vw] border-solid">
                                村龄{this.createTime}年
                            </div>
                        </div>

                        <div class="w-[100%] flex justify-center items-center mt-[3vw]">
                            <div class="text-[2.5vw] px-[4vw] py-[1.5vw] font-[600] rounded-[5vw] border-[#ccc] border-[.2vw] border-solid" onclick={this.shows}>
                                编辑资料
                            </div>
                            <div class="p-[2vw] ml-[1.5vw] rounded-[50vw] border-[#ccc] border-[.2vw] border-solid" onClick={this.showIsVisible} >
                                <Icon icon="bytesize:chevron-bottom" class="w-[2.25vw] h-[2.25vw]" id="iconT" />
                            </div>
                        </div>
                    </div>
                </Card>
            ) : ('')}
            {
                this.isLoading == true ? (
                    <vantabs>
                        <van-tabs swipeable animated={true} background={'#F5F5F5'} line-width={'7.5vw'} title-active-color={'#2c354f'}>
                            <van-tab title="主页">
                                <Card mt="3vw">
                                    <h1 class="text-[4vw] font-black">音乐品味</h1>
                                    <div class="w-[100%] flex justify-between items-center mt-[3vw]">
                                        <div class="w-[27vw] h-[27vw] flex flex-col justify-between py-[2vw] px-[1.75vw] bg-gradient-to-b from-pink-100 to-[#FFFDFC]-100 border-[#cccccc80] border-[.25vw] border-solid] rounded-[3vw]">
                                            <div>
                                                <p class="text-[2.5vw] text[#ccc] font-[550]">我喜欢的</p>
                                                <p class="text-[3vw] text[#b1b1ae] font-[600]">{this.playlist.playlist[0].trackCount}首</p>
                                            </div>
                                            <div class="flex items-center">
                                                <Icon icon="icon-park-solid:like" color="#b1b1ae" class="w-[3vw] h-[3vw]" />
                                                <p class="text-[2.5vw] text[#ccc] font-[550]">喜欢的音乐</p>
                                            </div>
                                        </div>
                                        <div class="w-[27vw] h-[27vw] flex flex-col justify-between py-[2vw] px-[1.75vw] bg-gradient-to-b from-yellow-100 to-[#fff]-100 border-[#cccccc80] border-[.25vw] border-solid] rounded-[3vw]">
                                            <div>
                                                <p class="text-[2.5vw] text[#ccc] font-[550]">累计听歌</p>
                                                <p class="text-[3vw] text[#b1b1ae] font-[600]">{this.detail.listenSongs}首</p>
                                            </div>
                                            <div class="flex items-center">
                                                <Icon icon="ant-design:signal-filled" color="#b1b1ae" class="w-[3vw] h-[3vw]" />
                                                <p class="text-[2.5vw] text[#ccc] font-[550]">听歌排行</p>
                                            </div>
                                        </div>
                                        <div class="w-[27vw] h-[27vw] flex flex-col justify-between py-[2vw] px-[1.75vw] bg-gradient-to-b from-blue-100 to-[#FFFDFC]-100 border-[#cccccc80] border-[.25vw] border-solid] rounded-[3vw]">
                                            <div>
                                                <p class="text-[2.5vw] text[#ccc] font-[550]">本周关键词</p>
                                                <p class="text-[3vw] text[#b1b1ae] font-[600]">属于你的音乐档案</p>
                                            </div>
                                            <div class="flex items-center">
                                                <Icon icon="dashicons:hourglass" color="#b1b1ae" class="w-[3vw] h-[3vw]" />
                                                <p class="text-[2.5vw] text[#ccc] font-[550]">黑胶时光机</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>



                                <Card mt="3vw">
                                    <h1 class="text-[4vw] font-black text-[#333333]">创建的歌单</h1>
                                    <div class="w-[100%] flex flex-col">
                                        {this.playlist.playlist.map((item, index) => (
                                            index !== 0 ? (
                                                <div class="relative flex items-center my-[3vw]">
                                                    <img src={item.coverImgUrl} alt="" class="w-[12vw] h-[12vw] rounded-[2vw] border-[.05vw] border-solid" />
                                                    <div class=" absolute top-[-.5vw] rounded-t-[5vw]  left-[1vw] w-[10vw] h-[1vw] bg-[#cccccc99]"></div>
                                                    <div class="flex flex-col ml-[2vw]">
                                                        <p class="text-[4vw] font-[600] text-[#333333]">{item.name}</p>
                                                        <p class="text-[2.5vw] font-[500] text-[#858585]">{item.trackCount}首，<span>播放{item.playCount}次</span></p>
                                                    </div>
                                                </div>) : null
                                        ))}
                                    </div>
                                </Card>


                                <Card mt="3vw">
                                    <div class="flex items-center justify-between mb-[4vw]">
                                        <h1 class="text-[4vw] font-black text-[#333333] flex  items-center">我的评论<span class="text-[#969696] text-[2.5vw] font-[500] ml-[1vw]">({this.history.commentCount})</span></h1>
                                        <Icon icon="subway:lock-1" color="#b1b1ae" class="w-[3.5vw] h-[3.5vw]" />
                                    </div>
                                    {this.history.comments.map((item, index) => (
                                        <div class="flex flex-col ">
                                            <div class="flex justify-between items-center">
                                                <div class="flex justify-between items-center">
                                                    <img src={this.song[index].al.picUrl} alt="" class="w-[6vw] h-[6vw] rounded-[2vw]" />
                                                    <p class="text-[2.5vw] text-[#9f9f9f] ml-[2vw]">
                                                        ⌈{this.song[index].name}⌋ - {this.song[index].ar[0].name}
                                                    </p>
                                                </div>
                                                <Icon icon="iconamoon:like-light" color="#9f9f9f" class="w-[3.5vw] h-[3.5vw]" />
                                            </div>
                                            <p class="text-[3.25vw] text-[#323232] my-[3vw]">
                                                {item.content}
                                            </p>
                                            <p class="text-[2.5vw] text-[#9f9f9f]">
                                                {new Date(item.time).getFullYear()}年{new Date(item.time).getMonth() + 1}月{new Date(item.time).getDate()}日
                                            </p>
                                        </div>
                                    ))}
                                </Card>
                                <Card mt="3vw">
                                    <div class="flex items-center justify-between mb-[4vw]">
                                        <h1 class="text-[4vw] font-black text-[#333333] flex  items-center">基本信息</h1>
                                        <div class="border-[#ccc] border-[.1vw] border-solid py-[1vw] px-[2.25vw] rounded-[5vw] text-[2.5vw]">
                                            领取村民证
                                        </div>
                                    </div>
                                    <div class="flex flex-col text-[2.75vw] text-[#656565]">
                                        <p>
                                            <span>村龄：</span>
                                            <span>{this.createTime}年（{new Date(this.detail.profile.createTime).getFullYear()}年{new Date(this.detail.profile.createTime).getMonth() + 1}月注册）</span>
                                        </p>
                                        <p>
                                            <span>性别：</span>
                                            <span>{this.detail.profile.gender == 1 ? '男' : '女'}</span>
                                        </p>
                                        <p>
                                            <span>年龄：</span>
                                            <span>{this.birth}</span>
                                        </p>
                                    </div>
                                    <div class="flex justify-center items-center mt-[4.75vw] pt-[3vw] border-t-[.1vw] border-[#ccccccA6] border-solid text-[#656565] text-[2.75vw] w-[92vw] ml-[-4vw]">
                                        <span>查看全部</span>
                                        <Icon icon="ps:right" color="#656565" class="w-[3vw] h-[3vw]" />
                                    </div>
                                </Card>
                            </van-tab>
                            <van-tab title="动态">
                                <div class=" w-screen h-screen bg-[#f5f5f5] flex justify-center">
                                    <div class='mt-[9vw] text-[#9497a1] text-[2.75vw]'>
                                        <span>暂时还没有动态哦</span>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab title="播客">
                                <div class=" w-screen h-screen bg-[#f5f5f5] flex justify-center">
                                    <div class='mt-[9vw] text-[#9497a1] text-[2.75vw]'>
                                        <span>暂时还没有播客哦</span>
                                    </div>
                                </div>
                            </van-tab>
                        </van-tabs>
                    </vantabs>
                ) : ('')
            }





            {
                this.isLoading == true ? (
                    <van-popup v-model={this.show} overlay={false} transition="feat">
                        <div class=" w-screen h-screen bg-[#fff]">
                            <header class="flex items-center w-screen p-[4vw]">
                                <span onClick={this.shows}>
                                    <Icon icon="ph:arrow-left-light" color="#333333" class="w-[5vw] h-[5vw] mr-[4.25vw]" />
                                </span>
                                <span class="text-[4.25vw] font-[700]">我的资料</span>
                            </header>
                            <div class="pt-[2vw] w-screen bg-[#F6F6F6] text-[3.5vw]">
                                <ul class="bg-[#fff] py-[2vw] pl-[4vw] ulList" >
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]" >
                                        <div><span>头像</span></div>
                                        <div class="w-[10vw] h-[10vw] rounded-[50%]" style={{ backgroundImage: `url(${this.user.profile.avatarUrl})`, backgroundSize: '100%', backgroundRepeat: "no-repeat" }}></div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]" onClick={this.setName}>
                                        <div><span>昵称</span></div>
                                        <div><span class="text-[#989898]">{this.user.profile.nickname}</span></div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]" onClick={this.setSex}>
                                        <div><span>性别</span></div>
                                        <div><span class="text-[#989898]">{this.detail.profile.gender == 1 ? '男' : this.detail.profile.gender == 0 ? '保密' : '女'}</span></div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw]">
                                        <div><span>二维码</span></div>
                                        <Icon icon="ph:qr-code-light" color="#989898" class="w-[5vw] h-[5vw] ml-[.25vw]" />
                                    </li>
                                </ul>
                                <ul class="bg-[#fff] py-[2vw] pl-[4vw] mt-[2vw] ulList">
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]" onClick={this.mybirthday}>
                                        <div><span>生日</span></div>
                                        <div>
                                            <span class="text-[#989898]">
                                                {new Date(this.detail.profile.birthday).getFullYear()}-{new Date(this.detail.profile.birthday).getMonth() + 1}-{new Date(this.detail.profile.birthday).getDate()}
                                            </span>
                                        </div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]" onClick={this.mycitys}>
                                        <div><span>地区</span></div>
                                        <div><span class="text-[#989898]">{this.areaList.province_list[this.detail.profile.province]} {this.areaList.city_list[this.detail.profile.city]}</span></div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]">
                                        <div><span>大学</span></div>
                                        <div><span class="text-[#989898BF]">未填写</span></div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]">
                                        <div><span>音乐标签</span></div>
                                        <div><span class="text-[#989898BF]">选择标签</span></div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw]">
                                        <div><span>简介</span></div>
                                        <div><span class="text-[#989898BF]">还没有简介</span></div>
                                    </li>
                                </ul>
                                <ul class="bg-[#fff] py-[2vw] pl-[4vw] mt-[2vw] ulList">
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw] border-b-[.1vw] border-solid border-[#cccccc80]">
                                        <div><span>个人主页隐私设置</span></div>
                                    </li>
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw]">
                                        <div><span>主页模块顺序设置</span></div>
                                    </li>
                                </ul>
                                <ul class="bg-[#fff] py-[2vw] pl-[4vw] mt-[2vw] pb-[47vw]">
                                    <li class="pr-[4vw] py-[2vw] flex justify-between items-center h-[12vw]">
                                        <div><span>账号和绑定设置</span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </van-popup>
                ) : ('')
            }
            {
                this.isLoading == true ? (
                    <vanpopup>
                        <van-popup v-model={this.sex}>
                            <div class="w-[87vw] mx-[6.5vw] rounded-[3vw] text-[3vw] font-[550] text-[#333] bg-[#fff]">
                                <van-cell title="男" clickable={true} class=" rounded-[3vw]" value={this.detail.profile.gender == 1 ? '✔' : ''} value-class={'reds'} onClick={this.setSexTwo} />
                                <van-cell title="女" clickable={true} class=" rounded-[3vw]" value={this.detail.profile.gender == 2 ? '✔' : ''} value-class={'reds'} onClick={this.setSexz} />
                            </div>
                            <div class="flex items-center justify-center w-[8vw] h-[8vw] rounded-[50%] mx-auto bg-[#cccccccc] mt-[9vw]" onClick={this.setSex}>
                                <Icon icon="system-uicons:cross" color="white" class="w-[5vw] h-[5vw]" />
                            </div>
                        </van-popup>
                    </vanpopup>
                ) : ('')
            }
            <vanpopup>
                <van-popup v-model={this.mycity} lock-scroll={true}>
                    <div class="w-[87vw] h-[96vw] rounded-[4vw] mx-[6.5vw] p-[5.25vw] bg-[#fff] relative overflow-hidden">
                        <h1 class="text-[4vw] font-[700] text-[#333]">请选择省市</h1>
                        <vanArea>
                            <van-area title="" area-list={this.areaList} columns-num="2" item-height="13vw" value="420000" onCancel={this.mycitys} onConfirm={this.handleConfirm} />
                        </vanArea>
                    </div>
                </van-popup>
            </vanpopup>
            <van-popup v-model={this.names} overlay={false}>
                <section class="flex flex-col w-screen h-screen">
                    <div class="p-[4vw] flex justify-between items-center">
                        <div class="flex justify-between items-center">
                            <span onClick={this.setName}>
                                <Icon icon="ph:arrow-left-light" color="#333333" class="w-[5vw] h-[5vw] mr-[4.25vw]" />
                            </span>
                            <span class="text-[4.25vw] font-[700]">修改昵称</span>
                        </div>
                        <span class="text-[4.25vw] font-[700]" onClick={this.setNamess}>
                            保存
                        </span>
                    </div>
                    <div class="w-[100%] px-[4vw] py-[2vw] relative">
                        <input type="text" maxlength="31" v-model={this.userNames} class="w-[100%] h-[8vw] text-[4.25vw] p-[1vw] pr-[6.5vw] mb-[1.5vw] border-b-[.075vw] border-[#cccccccc] border-solid" />
                        <span onClick={this.rmInp}>
                            <Icon icon="system-uicons:cross" color="#ccc" class="w-[5vw] h-[5vw] absolute top-[3vw] right-[5vw]" />
                        </span>
                        <p class={this.setnames == '昵称不符合规范' || this.setnames == '昵称重复' ? 'text-[red]' : 'text-[#00FF9B]'}>
                            <span class="text-[2.75vw]">
                                {this.setnames == '昵称不符合规范' ? this.setnames + ':至少2个汉字或4字母且只支持_-2个符号,上限为30字符' : this.setnames}
                            </span>
                        </p>
                    </div>
                </section>
            </van-popup>

            <vanpopup>
                <van-popup v-model={this.mybirth} lock-scroll={true}>
                    <div class="w-[92vw] h-[96vw] rounded-[4vw] mx-[4vw] p-[5.25vw] bg-[#fff] relative overflow-hidden">
                        <h1 class="text-[4vw] font-[700] text-[#333]">请选择</h1>
                        <van-datetime-picker
                            v-model={this.currentDate}
                            type="date"
                            title="选择年月日"
                            min-date={this.minDate}
                            max-date={this.maxDate}
                            onConfirm={this.mypicker}
                            onCancel={this.mybirthday}
                        />
                    </div>
                </van-popup>
            </vanpopup>
        </div >
    },
    data() {
        return {
            user: [],
            isLoading: false,
            detail: [],
            areaList,
            city: [],
            birth: '',
            createTime: '',
            playlist: [],
            history: [],
            song: [],
            color: '#fff',
            name: "",
            show: false,
            isVisible: false,
            sex: false,//修改性别
            arrSet: [],//修改请求数组，包含所有参数
            names: false,//修改昵称
            userNames: '',//input双向绑定数据
            setnames: '',//表单验证提示
            mycity: false,//修改省市区
            minDate: new Date(1970, 1, 1),
            maxDate: new Date(2030, 12, 31),
            currentDate: new Date(2021, 0, 17),
            mybirth: false,
        }
    },
    async created() {
        const res = await getUserAccount().catch((err) => console.log(err))
        const detail = await getUserDetail(res.data.profile.userId);
        const binding = await getUserBinding(res.data.profile.userId)
        const playlist = await getUserPlaylist(res.data.profile.userId)
        const history = await getUserHistory(res.data.profile.userId)
        this.user = res.data
        this.detail = detail.data;
        this.playlist = playlist.data;
        this.history = history.data.data
        const song = await getSong(this.getparse(this.history.comments))
        this.song = song.data.songs
        this.birth = this.birthday(this.detail.profile.birthday)
        //村龄判断
        if (new Date().getMonth() + 1 - new Date(this.detail.profile.createTime).getMonth() + 1 > 0) {
            this.createTime = new Date().getFullYear() - new Date(this.detail.profile.createTime).getFullYear()
        } else {
            this.createTime = new Date().getFullYear() - new Date(this.detail.profile.createTime).getFullYear()
        }
        //所有数据请求完成后
        this.userNames = this.detail.profile.nickname;
        this.arrSet = [this.detail.profile.gender, this.detail.profile.birthday, this.detail.profile.nickname, this.detail.profile.province, this.detail.profile.city, this.detail.profile.signature]
        console.log(this.areaList.province_list[110000])
        this.isLoading = true
    },
    watch: {
        userNames: _.debounce(async function (keywords) {
            if (this.userNames != '') {
                const res = await getNickname(keywords);
                if (this.userNames == this.user.profile.nickname) {
                    this.setnames = ''
                } else {
                    if (res.data.message == undefined) {
                        if (res.data.duplicated == true) {
                            this.setnames = '昵称重复'
                        } else if (res.data.duplicated == false) {
                            this.setnames = '昵称可用'
                        }
                    } else {
                        this.setnames = res.data.message
                    }
                }
                console.log(res.data);
            } else if (this.userNames == '') {
                this.setnames = ''
            }
        }, 300),
    },
    methods: {
        birthday(dates) {
            const date = new Date(dates); // 创建一个表示给定时间戳的对象
            const year = date.getFullYear();// 获取年份
            const month = date.getMonth() + 1;// 获取月份
            const day = date.getDate(); // 获取日期
            let zodiacSign = '';
            if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
                zodiacSign = '白羊座';
            } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
                zodiacSign = '金牛座';
            } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
                zodiacSign = '双子座';
            } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
                zodiacSign = '巨蟹座';
            } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
                zodiacSign = '狮子座';
            } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
                zodiacSign = '处女座';
            } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
                zodiacSign = '天秤座';
            } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
                zodiacSign = '天蝎座';
            } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
                zodiacSign = '射手座';
            } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
                zodiacSign = '摩羯座';
            } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
                zodiacSign = '水瓶座';
            } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
                zodiacSign = '双鱼座';
            }
            return (year + '')[2] + '0后' + ' ' + zodiacSign;
        },
        getparse(item) {
            let arr = []
            item.forEach((val) => {
                const obj = JSON.parse(val.resourceInfo)
                arr.push(obj.id);
            })
            return arr.join(',')
        },
        shows() {
            this.show = !this.show
            if (this.show == true) {
                const arr = this.detail.profile.gender;
                this.arrSet[0] = arr;
                console.log(this.arrSet)
            }
        },
        toIndex() {
            this.$router.push('./IndexView')
        },
        showIsVisible() {
            this.isVisible = !this.isVisible
            const icon = document.getElementById('iconT');
            icon.style.transform == 'rotate(0deg)' ? icon.style.transform = 'rotate(180deg)' : icon.style.transform = 'rotate(0deg)';
        },
        handleScroll() {
            const user = document.getElementById('userName');
            const img = document.getElementById('userImg');
            const head = document.getElementById('head');
            const windowWidth = window.innerWidth * .6;
            let j = user.getBoundingClientRect().top / windowWidth < 0.01 ? 0 : user.getBoundingClientRect().top / windowWidth;
            let I = img.getBoundingClientRect().top / windowWidth < 0.01 ? 0 : img.getBoundingClientRect().top / windowWidth + .2;
            img.style.transition = 'opacity .2s'
            user.style.opacity = j + ''
            img.style.opacity = I + ''
            head.style.transition = 'background .2s'
            if (user.getBoundingClientRect().top < window.innerWidth * .35) {
                head.style.backgroundColor = 'rgba(255,255,255,.5)'
                this.color = '#333'
                this.name = ''
                if (user.getBoundingClientRect().top < -window.innerWidth * .01) {
                    head.style.backgroundColor = 'rgba(255,255,255,1)'
                    this.name = this.user.profile.nickname
                }
            } else if (user.getBoundingClientRect().top > window.innerWidth * .35) {
                head.style.backgroundColor = 'rgba(255,255,255,0)'
                this.color = '#fff'
                this.name = ''
            }
        },
        async setSex() {
            this.sex = !this.sex;
            // const sex = setUser(gender).then()
            if (this.arrSet[0] != this.detail.profile.gender) {
                const j = this.detail.profile.gender
                this.arrSet[0] = j
                const res = await setUser(this.arrSet[0], this.arrSet[1], this.arrSet[2], this.arrSet[3], this.arrSet[4], this.arrSet[5]).then((res) => {
                    console.log('修改性别请求成功')
                }).catch((err) => console.log(err))
            }
        },
        setSexTwo() {
            this.detail.profile.gender = 1
        },
        setSexz() {
            this.detail.profile.gender = 2
        },
        setName() {
            this.names = !this.names;
        },
        async setNamess() {
            if (this.setnames == '昵称可用') {
                this.names = !this.names;
                this.arrSet[2] = this.userNames
                this.user.profile.nickname = this.userNames
                const res = await setUser(this.arrSet[0], this.arrSet[1], this.arrSet[2], this.arrSet[3], this.arrSet[4], this.arrSet[5]).then((res) => {
                    console.log('修改昵称请求成功')
                }).catch((err) => console.log(err))
                this.userNames = this.detail.profile.nickname;
            }
        },
        rmInp() {
            this.userNames = ''
        },
        mycitys() {
            this.mycity = !this.mycity
        },
        async handleConfirm(val) {
            this.mycity = !this.mycity
            this.arrSet[3] = Number(val[0].code)
            this.arrSet[4] = Number(val[1].code)
            this.detail.profile.province = Number(val[0].code)
            this.detail.profile.city = Number(val[1].code)
            const res = await setUser(this.arrSet[0], this.arrSet[1], this.arrSet[2], this.arrSet[3], this.arrSet[4], this.arrSet[5]).then((res) => {
                console.log('修改地区请求成功')
            }).catch((err) => console.log(err))
            console.log(val)
        },
        mybirthday() {
            this.mybirth = !this.mybirth
        },
        async mypicker(value) {
            this.mybirth = !this.mybirth
            const val = new Date(value).getTime();
            this.arrSet[1] = val;
            this.detail.profile.birthday = val;
            const res = await setUser(this.arrSet[0], this.arrSet[1], this.arrSet[2], this.arrSet[3], this.arrSet[4], this.arrSet[5]).then((res) => {
                console.log('修改生日请求成功')
            }).catch((err) => console.log(err))
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        // 在组件卸载前移除滚动事件监听器
        window.removeEventListener('scroll', this.handleScroll);
    },
}

