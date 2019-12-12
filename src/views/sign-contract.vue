<template>
  <div class="box">
		<div class="headName">
			<span class="logo"></span><br>
			<span class="explain">欢迎使用电子合同签约系统</span>
		</div>
		<div class="list">
			<ul>
				<li v-for="(list,index) in dataLists" :key="index">
					<div class="title clearfix">
						<span class="fl">有限合伙</span>
						<span class="fr">电子合同</span>
					</div>
					<div class="content">
						<div class="time flex-item">
							<span><em>{{list.rate}}</em>/年起</span><br>
							<span>{{list.time}}</span>
						</div>
						<div class="proName flex-item">{{list.name}}</div>
						<div class="btn flex-item">
							<router-link to="/sign-confirm">
									<button>签约</button>
							</router-link>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){	
	return{
		dataLists:[
			{
				rate:'8.9%',
				time:'180天',
				name:'点金手睿享专项不良资产'
			},
			{
				rate:'10.0%',
				time:'360天',
				name:'司庆热卖'
			},
			{
				rate:'6.9%',
				time:'30天',
				name:'新手专享'
			},
		]
	}
  },
  components: {
  },
}
</script>
<style>
  html,body{
		width:100%;
		background:rgba(243,243,243,1);
	}
	.box{
		background:rgba(243,243,243,1);
		font-size: 0.3rem;
		padding-bottom: 0.55rem;
	}
	.box .headName{
		color: #030303;
		font-size: 0.3rem;
		text-align: center;
		margin: 0.3rem 0;
	}
	.headName .logo{
		display: inline-block;
		width:1.78rem;
		height:0.51rem;
		background-image: url(../assets/logo.png);
		background-size:cover;
	}
	.list{
		margin:0 0.4rem;
		background:#fff;
	}
	.list ul{
		background:rgba(243,243,243,1);
		margin-bottom: 0.733333rem;
	}
	.list li{
		background-color:#fff;
		border-radius: 0.106667rem;
		margin-bottom: 0.266667rem
	}
	.list li .title{
		padding: 0 0.6rem;
		line-height: 0.75rem;
		font-size: 0.28rem;
		color: #666;
		border-bottom:1px solid rgba(243,243,243,1);
	}
	.list li .content{
		display: flex;
		align-items: center;
		padding:0.36rem 0;
	}
	.list li .content .flex-item{
		width: 33.33%;
		text-align: center;
	}
	.list li .content .time{
		border-right:1px solid rgba(243,243,243,1);
	}
	.list li .content .time span:first-child{
		font-size: 0.28rem;
		color:#B71935;
	}
	.list li .content .time em{
		font-size:0.36rem;
	}
	.list li .content .proName{
		color:#222;
		text-align: left;
		margin-left: 0.38rem;
	}
	.list li .btn button{
		width:1.29rem;
		height:0.49rem;
		border-radius: 0.25rem;
		border:1px solid #B71935;
		background-color: #fff;
    color: #B71935;
    outline: none;
	}
</style>
