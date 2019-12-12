<template>
    <div class="box">
        <div class="top-info">
            <div class="first">
                <div class="l-info">
                    <span>姓名：</span>
                    <span>张三</span>
                </div>
                <div class="r-info">
                    <span>性别：</span>
                    <span>男</span>
                </div>
            </div>
            <div class="second">
                <span>身份证号：</span>
                <span>132307199606013</span>
            </div>
            <div class="third">
                <span>身份证有效期：</span>
                <span>2045-1-12</span>
            </div>
        </div>
        <div class="center-info">
            <ul>
                <li>
                    <span>手机号</span>
                    <input type="text" placeholder="请输入手机号码">
                </li>
                <li>
                    <span>电子邮箱</span>
                    <input type="text" placeholder="请输入邮箱地址">
                </li>
                <li>
                    <span>所在地址</span>
                    <input type="text" placeholder="请选择">
                </li>
                <li>
                    <span>详细地址</span>
                    <input type="text" placeholder="街道、楼牌号等">
                </li>
                <li>
                    <span>认购金额</span>
                    <input type="text" placeholder="">
                </li>
                <li>
                    <span>业绩基准</span>
                    <input type="text" placeholder="">
                </li>
            </ul>
        </div>
        <div class="bot-info">
            <div>指定以下帐号用于接收收益分配</div>
            <ul>
                <li>
                    <span>户名</span>
                    <input type="text" placeholder="请输入账户名">
                </li>
                <li>
                    <span>帐号</span>
                    <input type="text" placeholder="请输入帐号">
                </li>
                <li>
                    <span>开户行</span>
                    <input type="text" placeholder="精准到支行">
                </li>
            </ul>
        </div>
        <div class="btn">
            <button>下一步</button>
        </div>
    </div>
</template>

<style>
    .box{
        background:rgba(243,243,243,1);
        padding-bottom:2.02rem;
    }
    .top-info{
        margin-top:0.3rem;
        padding-left:0.63rem;
        background-color: #fff;
        text-align: left;
        line-height:0.68rem;
        color:#222;
    }
    .top-info .first{
        display: flex;
    }
    .top-info .first div{
        flex-grow: 1;  
    }
    .center-info{
        margin-top:0.2rem;
        background-color: #fff;
        padding-left:0.4rem;
        text-align: left;
        font-size: 0.3rem;
    }
    .center-info li{
        border-bottom: 1px solid rgba(243,243,243,1);
        line-height: 1.13rem;
    }
    .center-info li span{
        margin-right: 0.53rem;
    }
    .center-info li:first-child span{
        margin-right: 0.83rem;
    }
    .bot-info{
        margin-top:0.2rem;
        background-color: #fff;
        padding-left:0.4rem;
        text-align: left;
        font-size: 0.3rem;
        color:#666;
    }
    .bot-info div{
        padding-top: 0.3rem;
    }
    .bot-info li{
        border-bottom: 1px solid rgba(243,243,243,1);
        line-height:0.98rem;
    }
    .bot-info li span{
        width: 1.73rem;
        display: inline-block;
    }
    .box .btn{
        width:100%;
        height: 2.06rem;
        background:rgba(243,243,243,1);
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .box .btn button{
        width:6.84rem;
        height:1.02rem;
        color:#fff;
        margin-top:0.6rem;
        text-align: center;
        line-height: 1.02rem;
        font-size: 0.36rem;
        border-radius: 0.08rem;
        background-color: #B71935;
        outline: none;
        border: none;
    }
</style>