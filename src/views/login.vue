<template>
    <div class="box">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="infomation">
            <input type="text" class="id" placeholder="请输入身份证号码">
            <input type="text" class="phone" placeholder="请输入手机号码">
        </div>
        <div class="btn">
            <button>登录</button>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style>
.logo{
    margin-top:1.33rem;
}
.infomation{
    width:100%;
    margin-top:1.1rem;
    padding: 0 0.33rem;
}
.infomation input[type=text]{
    display: block;
    width:100%;
    height: 1.05rem;
    border-radius: 0.1rem;
    margin-bottom: 0.33rem;
    padding-left: 1.03rem;
}
</style>