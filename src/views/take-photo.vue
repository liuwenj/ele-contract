<template>
    <div class="box">
        <div>请上传本人身份证</div>
        <div class="front">
           <div class="front-box photo-box">
                <input type="file" accept="image/*" capture="camera" @change="uploadFront" ref="front"> 
                <span></span>
                <img :src="this.url" alt="">
           </div>
           <div>身份证人像面</div>
        </div>
        <div class="back">
            <div class="back-box photo-box"> 
                <input type="file" accept="image/*" capture="camera" @change="uploadBack" ref="back">
                <span></span>
            </div>
            <div>身份证国徽面</div>
        </div>
        <div class="btn">
            <router-link to="">
                <button>下一步</button>
            </router-link>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            url:''
        }
    },
    methods:{
        uploadFront(){
           let front=this.$refs.front
           if(front.type.indexOf('image') == 0 ){
                let reader= new FileReader()
                reader.readAsDataURL(front)
                
           }
        },
        uploadBack(){}
    }
}
</script>

<style>
    body,html{
        width:100%;
        background-color: #fff;
    }
    .box{
        font-size: 0.3rem;
        margin-top: 0.3rem;
    }
    .photo-box{
        width:5.07rem;
        height: 3.21rem;
        margin:0.3rem auto;
        position: relative;     
        background-size: cover;
        box-shadow: 0 0 0.3rem 0.1rem rgba(0,0, 0, 0.1);
    }
    .photo-box span{
        width:1.52rem;
        height: 1.52rem;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        background-image: url(../assets/upload.png);
        background-size: cover;
    }
    .photo-box input[type=file]{
        width:1.52rem;
        height: 1.52rem;
        position: absolute;
        top:50%;
        left:50%;
        z-index: 1;
        opacity: 0;
        transform: translate(-50%, -50%);
    }
    .photo-box img{
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        z-index: 2;
    }
    .front-box{
        background-image: url(../assets/front.png);
    }
    .back-box{
        background-image: url(../assets/back.png);
    }
    .box .btn button{
        width:6.84rem;
        height:1.02rem;
        position: fixed;
        bottom:0.65rem;
        left: 0.33rem;
        color:#fff;
        text-align: center;
        line-height: 1.02rem;
        font-size: 0.36rem;
        border-radius: 0.08rem;
        background-color: #ccc;
        outline: none;
        border: none;
    }
</style>