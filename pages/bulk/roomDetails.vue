<template>
	<view class="wrap">
		<view class="top u-relative">
			<u-swiper :autoplay="false" :list="list" height="440" border-radius="0"></u-swiper>
			<view class="iconDiv u-absolute u-flex u-row-between">
				<view class="icon" @click="back()">
					<u-icon name="arrow-leftward" color="#333333"></u-icon>
				</view>
				<!-- 				<view class="icon">
					<u-icon name="heart" color="#333333"></u-icon>
				</view> -->
			</view>
		</view>
		<view class="main">
			<view class="name">
				<view class="top">
					<view class="dese">
						{{ listData.roomArea }} m<sup>2</sup>
						<text style="margin: 0 10rpx ;">·</text>
						<text>
							<text v-if="listData.hasWindows">有窗</text>
							<text v-else>无窗</text>
						</text>
						<text style="margin: 0 10rpx ;">·</text>
						整套公寓
					</view>
					<view class="dese1">
						{{ listData.roomDesc }}
					</view>
					<view class="title">
						{{ listData.tittle }}
					</view>
				</view>
				<view class="bottom u-flex" v-if="listData.isSpecialOffer">
					<view class="u-flex-6">
						<text style="font-weight: 600;">特价房</text>限时秒杀，请尽快预定您所选的日期。
					</view>
					<view class="u-flex-1 u-flex u-row-right">
						<view style="width: 68rpx;height: 68rpx;">
							<u-image width="100%" height="100%" src="/static/img/lightBulb.png"></u-image>
						</view>
					</view>
				</view>
			</view>
			<view class="situation item">
				<view class="item_wrap">
					<view class="title">
						房源概况
					</view>
					<view class="list u-flex">
						<view class="list_wrap">
							<view style="width: 48rpx;height: 48rpx;margin: 0 auto;">
								<u-image width="100%" height="100%" src="/static/img/bedroom.png" border-radius="10">
								</u-image>
							</view>
							<view class="text-area">
								1间卧室
							</view>
						</view>
						<view class="list_wrap">
							<view style="width: 48rpx;height: 48rpx;margin: 0 auto;">
								<u-image width="100%" height="100%" src="/static/img/bed.png" border-radius="10">
								</u-image>
							</view>
							<view class="text-area">
								{{ listData.bedNum }}张床
							</view>
						</view>
						<view class="list_wrap">
							<view style="width: 48rpx;height: 48rpx;margin: 0 auto;">
								<u-image width="100%" height="100%" src="/static/img/toilet.png" border-radius="10">
								</u-image>
							</view>
							<view class="text-area">
								1间卫生间
							</view>
						</view>
						<view class="list_wrap">
							<view style="width: 48rpx;height: 48rpx;margin: 0 auto;">
								<u-image width="100%" height="100%" src="/static/img/people.png" border-radius="10">
								</u-image>
							</view>
							<view class="text-area">
								{{ listData.canResideNum }}位房客
							</view>
						</view>
					</view>
					<scroll-view scroll-x="true">
						<view class="box u-flex">
							<view class="box_wrap">
								<view class="typeTitle">
									整个房源
								</view>
								<view class="text">
									独享所有空间，无需与他人公用
								</view>
							</view>
							<view class="box_wrap">
								<view class="typeTitle">
									卧室1
								</view>
								<view class="text">
									{{ listData.bedNum }}张床
								</view>
							</view>
						</view>
					</scroll-view>
				</view>

				<view class="introduce item" v-if="listData.roomDesc">
					<view class="item_wrap">
						<view class="title">
							房源介绍
						</view>
						<view class="content">
							<!-- <view class="content_title">【*卡尔*星享】house*</view> -->
							<view class="text">
								{{ listData.roomDesc }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 			<view class="evaluation">
				<view class="item_wrap">
					<view class="title">
						房源评价
					</view>
					<view class="content">
						<view class="u-flex">
							<view>
								<u-image width="88rpx" height="88rpx" :src="src" shape="circle">
								</u-image>
							</view>
							<view style="margin-left: 28rpx;font-size: 26rpx;">
								<view style="font-weight: 700;">
									佳岚
								</view>
								<view>
									2021年2月
								</view>
							</view>
						</view>
						<view class="statements">
							房间很大很干净，同价位里住过比较优秀的民宿拉，房东人也很好，回复很及时，推荐的附近早餐店福多多也很可，下次来泉州还会找他，也会介绍给朋友拉~
						</view>
					</view>
				</view>
			</view> -->
			<view class="location">
				<view class="item_wrap u-flex u-row-between">
					<view class="title">
						房源位置
					</view>
					<view @click="navigation()" style="width: 66rpx;">
						<view>
							<u-image src="/static/img/static_img_navigation.png" width="66rpx" height="66rpx"></u-image>
						</view>
					</view>
				</view>
				<view class="content">
					<!-- <view class="map">
						<u-image width="100%" height="288rpx" :src="src">
						</u-image>
					</view> -->
				</view>
				<view class="address">
					<u-icon name="map-fill"></u-icon>
					<text>
						该房源位于中国，{{ storeData.province }}，{{ storeData.city }}，{{ storeData.region }}，{{ storeData.address }}
					</text>
				</view>
			</view>
			<view class="facilities">
				<view class="item_wrap">
					<view class="title">
						设施/服务
					</view>
					<view class="content">
						<view class="service">
							<view class="option">
								<view class="u-flex u-flex-wrap">
									<view class="u-flex-1" v-for="item in  listData.configurations">
										<u-icon name="checkmark-circle" color="#30690b"></u-icon>
										<text>{{ item }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>
			<view class="instructions">
				<view class="item_wrap">
					<view class="title">
						预定须知
					</view>
					<view class="content">
						<text style="font-weight: 600;">入住退房时间</text>
						<text>入住：下午3：00后、退房：中午12：00</text>
					</view>
				</view>
				<view class="wrap">
					<view class="title">
						安全须知
					</view>
					<view class="content" style="font-size: 26rpx;">
						在新冠肺炎疫情期间，我们要求所有房东和房客查看并遵守本平台的社交角距离准则和其他新冠肺炎疫情相关准则。已配备一氧化碳报警器，已配备烟雾报警器。
					</view>
				</view>
				<view class="wrap">
					<view class="title">
						取消政策
					</view>
					<view class="content">
						当天下午1点后，3点前取消，扣除首房房费后，退还剩余房费的50%和全清洁费用
					</view>
				</view>
				<view class="wrap">
					<text class="title">
						房屋守则
					</text>
					<text class="content" style="margin-left: 10rpx;">
						适合儿童（2-12岁）·不允许举办派对和活动·合适婴幼儿（2岁以下）·不允许携带宠物·禁止吸烟
					</text>
				</view>
				<view class="wrap">
					<text class="title">
						安全预定
					</text>
					<text class="content" style="margin-left: 10rpx;">
						为了保护您的账号隐私及付款安全，请勿妄信第三方预定代理提供的折扣或者礼金券，也不要在本平台网站或者App之外汇款或沟通。
					</text>
				</view>
				<view class="wrap">
					<text class="title">
						发票须知
					</text>
					<text class="content" style="margin-left: 10rpx;">
						本平台可为此房源的订单提供发票。开局发票，请在下单前选择[需要发票]并填写发票信息，退房后平台将自动为您开具电子普通发票，或纸质专用发票。
					</text>
				</view>
			</view>
			<view class="bottomBtn u-flex u-row-between">
				<view>
					<view class="price">
						<text style="font-weight: 600;">￥{{ GroupOrder.groupRoomInfo.groupPrice }}</text><text
							style="font-size: 24rpx;">/晚</text>
					</view>
				</view>
				<view class="btn" @click="reservationBtn()">
					预定
				</view>
				<u-popup v-model="show" mode="bottom">
					<view>
						<view class="roomInfo u-flex">
							<view class="u-flex-2">
								<view class="dese">整套公寓</view>
								<view class="price">
									<text
										style="font-weight: 600;">￥{{ GroupOrder.groupRoomInfo.groupPrice }}</text><text
										style="font-size: 24rpx;">/晚</text>
								</view>
							</view>
							<view class="u-flex-1">
								<u-image width="100%" height="128rpx" :src="baseUrl + listData.mainImage">
								</u-image>
							</view>
						</view>
						<view class="checkInTime u-flex u-row-between">
							<view>
								<view class="label">入住日期</view>
								<view class="value">
									{{ temp.orderReserveTimeStart }}
								</view>
							</view>
							<view>
								<view class="label">退房日期</view>
								<view class="value">
									{{ temp.orderReserveTimeEnd }}
								</view>
							</view>
							<view @click="show2 = true">
								<view class="label">到店时间</view>
								<view class="value">
									{{ temp.estimateArriveTime }}
								</view>
							</view>
						</view>
						<view class="form">
							<u-form :model="temp" ref="uForm">
								<u-form-item label="入住人数" prop="numberOfResidents" :border-bottom="false"
									label-width="168rpx">
									<u-input v-model="temp.numberOfResidents" />
								</u-form-item>
								<u-form-item label="预留人" prop="reserveName" :border-bottom="false" label-width="168rpx">
									<u-input v-model="temp.reserveName" />
								</u-form-item>
								<u-form-item label="预留号码" prop="reservePhone" :border-bottom="false"
									label-width="168rpx">
									<u-input v-model="temp.reservePhone" />
								</u-form-item>
								<u-form-item label="备注" :border-bottom="false" label-width="168rpx">
									<u-input v-model="temp.orderRemark" />
								</u-form-item>
							</u-form>
						</view>
						<view class="totalPrice u-flex u-row-between">
							<view>
								总价
							</view>
							<view style="font-weight: 600;">
								￥{{ GroupOrder.groupRoomInfo.groupPrice }}
							</view>
						</view>
						<view class="appointment">
							<view class="btn" @click="appointment">
								预约
							</view>
						</view>
					</view>
				</u-popup>
				<u-picker mode="time" v-model="show2" :params="{
					year: false,
					month: false,
					day: false,
					hour: true,
					minute: true,
					second: false
				}" @confirm="change2"></u-picker>
			</view>
		</view>
	</view>
</template>

<script>
	import EiCalendar from '@/components/ei-calendar/ei-calendar'
	export default {
		components: {
			EiCalendar
		},
		data() {
			return {
				listQuery: {
					id: ''
				},
				listData: {},
				GroupOrder: {},
				storeData: {},
				list: [],
				show2: false,
				show: false,
				temp: {
					orderReserveTimeStart: '',
					orderReserveTimeEnd: '',
					estimateArriveTime: '16:00'
				},
				setData: {},
				rules: {
					numberOfResidents: [{
						required: true,
						message: '请输入入住人数',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					reservePhone: [{
						required: true,
						message: '请输入预留人姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					reserveName: [{
						required: true,
						message: '请输入预留人手机',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}]
				},
				roomConfigurationList: [{
						key: '0',
						label: '自助入住'
					},
					{
						key: '1',
						label: '电梯'
					},
					{
						key: '2',
						label: '空调'
					},
					{
						key: '15',
						label: '洗衣机'
					},
					{
						key: '3',
						label: '无线网络'
					},
					{
						key: '4',
						label: '衣架'
					},
					{
						key: '5',
						label: '洗发水'
					},
					{
						key: '6',
						label: '按摩浴缸'
					},
					{
						key: '7',
						label: '吹风机'
					},
					{
						key: '8',
						label: '热水'
					},
					{
						key: '9',
						label: '冰箱'
					},
					{
						key: '10',
						label: '热水壶'
					},
					{
						key: '11',
						label: '一氧化碳报警器'
					},
					{
						key: '12',
						label: '灭火器'
					},
					{
						key: '13',
						label: '洗手液'
					},
					{
						key: '14',
						label: '急救包'
					}
				],

			}
		},
		onLoad(e) {
			this.GroupOrder = JSON.parse(uni.getStorageSync("GroupOrder"))
			this.listQuery.id = this.GroupOrder.roomInfo.id
			this.feachData()
			this.getDate()
		},
		methods: {
			feachData() {
				this.$u.api.roomDetails(this.listQuery).then(res => {
					this.listData = res.data
					this.storeDetails()
					let roomImagesArr = this.listData.roomImages.split(',')
					if (this.listData.roomConfiguration) {
						this.listData.roomConfigurations = this.listData.roomConfiguration.split(",")
						this.listData.configurations = []
						this.listData.roomConfigurations.map(item => {
							this.roomConfigurationList.forEach(iten => {
								if (item == iten.key) {
									this.listData.configurations.push(iten.label)
								}
							})
						})

					}
					console.log(this.listData.configurations)
					this.list = roomImagesArr.map(item => {
						return this.baseUrl + item
					})
				})
			},
			storeDetails() {
				let setData = {
					id: this.listData.storeId

				}
				this.$u.api.storeDetails(setData).then(res => {
					this.storeData = res.data
				})
			},
			navigation() {
				console.log(this.storeData.latitude, typeof(this.storeData.latitude))
				uni.openLocation({
					latitude: this.storeData.latitude, // 纬度，范围为-90~90，负数表示南纬
					longitude: this.storeData.longitude, // 经度，范围为-180~180，负数表示西经
					scale: 14, // 缩放比例
					name: this.storeData.address,
					address: this.storeData.province + this.storeData.city + this.storeData
						.region + this.storeData.address,
					success: function(r) {
						console.log(r)
					}
				})
			},
			getDate() {
				let dt = new Date(this.GroupOrder.groupRoomInfo.reserveTimeStart); //实例化时间对象
				let y = dt.getFullYear();
				let m = dt.getMonth() + 1 > 9 ? dt.getMonth() + 1 : '0' + (dt.getMonth() + 1);
				let d = dt.getDate() ? dt.getDate() : '0' + dt.getDate();
				this.temp.orderReserveTimeStart = y + '/' + m + '/' + d

				let dt1 = new Date(this.GroupOrder.groupRoomInfo.reserveTimeEnd); //实例化时间对象
				let y1 = dt1.getFullYear();
				let m1 = dt1.getMonth() + 1 > 9 ? dt1.getMonth() + 1 : '0' + (dt1.getMonth() + 1);
				let d1 = dt1.getDate() ? dt1.getDate() : '0' + dt1.getDate();
				this.temp.orderReserveTimeEnd = y1 + '/' + m1 + '/' + d1

			},
			reservationBtn() {
				this.show = true
			},
			appointment() {
				this.temp.orderRoomId = this.listData.id
				let obj = {
					...this.temp
				}
				var ch = "/"
				obj.orderReserveTimeStart = obj.orderReserveTimeStart.replace(new RegExp(ch, 'g'), "-")
				obj.orderReserveTimeEnd = obj.orderReserveTimeEnd.replace(new RegExp(ch, 'g'), "-")
				if (!obj.numberOfResidents) {
					uni.showToast({
						title: '请输入入住人数',
						icon: 'none'
					})
					return
				}
				if (!obj.reservePhone) {
					uni.showToast({
						title: '请输入预留人姓名',
						icon: 'none'
					})
					return
				}
				if (!obj.reserveName) {
					uni.showToast({
						title: '请输入预留人手机',
						icon: 'none'
					})
					return
				}
				obj.orderRoomId = obj.orderRoomId.toString()
				obj.orderReserveTimeStart += ' 00:00:00'
				obj.orderReserveTimeEnd += ' 00:00:00'
				obj.orderNo = this.GroupOrder.orderNo
				this.$u.api.userCreateOrdeGroup(obj).then(res => {
					uni.showToast({
						title: '操作成功',
						icon: 'success'
					})
					this.show = false

				})
			},
			change2(e) {
				this.temp.estimateArriveTime = e.hour + ':' + e.minute
			},
			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})

			}
		}
	}
</script>
<style>
	page {
		background-color: #FAFAFA;
	}
</style>
<style lang="scss" scoped>
	.wrap {
		padding-bottom: 100rpx;

		.top {
			.iconDiv {
				width: 100%;
				padding: 0 28rpx;
				top: 58rpx;

				.icon {
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
					background: #FFFFFF;
					line-height: 68rpx;
					text-align: center;
				}
			}
		}

		.main {
			.name {
				background: #FFFFFF;
				margin-bottom: 18rpx;

				.top {
					padding: 28rpx;
					border-bottom: 1rpx solid #eeeeee;

					.dese {
						color: #000000;
						font-size: 20rpx;
						margin-bottom: 6rpx;
					}

					.dese1 {
						color: #787878;
						font-size: 18rpx;
						line-height: 68rpx;
					}

					.title {
						font-weight: 600;
					}
				}

				.bottom {
					padding: 40rpx 28rpx;
					font-size: 22rpx;
				}

			}

			.situation {
				background: #FFFFFF;
				border-bottom: 1rpx solid #EEEEEE;
				margin-bottom: 18rpx;

				.item_wrap {
					border-bottom: 1rpx solid #EEEEEE;
					padding: 28rpx;

					.title {
						font-size: 30rpx;
						font-weight: 700;
						margin-bottom: 38rpx;
					}

					.list {
						.list_wrap {
							width: 20%;
							text-align: center;

							.text-area {
								font-size: 22rpx;
								font-weight: 600;
								line-height: 68rpx;
							}
						}
					}

					.box {
						width: 810rpx;
						margin-top: 18rpx;

						.box_wrap {
							width: 400rpx;
							height: 148rpx;
							border-radius: 10rpx;
							border: 2rpx solid #e1e1e1;
							margin-right: 10rpx;
							padding: 10rpx 28rpx;
							font-size: 20rpx;

							.typeTitle {
								font-weight: 700;
								margin-bottom: 18rpx;
							}

							.text {
								font-size: 24rpx;
							}
						}

						.box_wrap:last-child {
							margin-right: 0rpx;
						}
					}
				}

				.introduce {
					background: #FFFFFF;

					.item_wrap {
						padding: 28rpx;

						.title {
							font-size: 30rpx;
							font-weight: 700;
							margin-bottom: 28rpx;
						}

						.content {}
					}
				}
			}

			.evaluation {
				background: #FFFFFF;
				margin-bottom: 18rpx;

				.item_wrap {
					padding: 28rpx;

					.title {
						font-size: 30rpx;
						font-weight: 700;
						margin-bottom: 28rpx;
					}

					.content {
						.statements {
							margin-top: 28rpx;
							font-size: 28rpx;
						}
					}
				}
			}

			.location {
				background: #FFFFFF;
				margin-bottom: 18rpx;

				.item_wrap {
					padding: 28rpx;

					.title {
						font-size: 30rpx;
						font-weight: 700;
						margin-bottom: 28rpx;
					}
				}

				.content {}

				.address {
					padding: 28rpx;
					font-size: 20rpx;
				}
			}

			.facilities {
				background: #FFFFFF;
				margin-bottom: 18rpx;

				.item_wrap {
					padding: 28rpx;

					.title {
						font-size: 30rpx;
						font-weight: 700;
					}

					.content {
						.service {
							padding: 28rpx 0;
							border-bottom: 1rpx solid #EEEEEE;

							.text-area {
								text-align: center;
								font-size: 20rpx;
								margin-top: 10rpx;
							}

							.option {
								margin-left: 18rpx;
								font-size: 22rpx;
								line-height: 44rpx;
							}
						}

						.service:last-child {
							border-bottom: none;
						}
					}

				}
			}

			.instructions {
				background: #FFFFFF;
				margin-bottom: 18rpx;

				.item_wrap {
					padding: 28rpx;
					border-bottom: 1rpx solid #EEEEEE;

					.title {
						font-size: 30rpx;
						font-weight: 700;
					}

					.content {
						font-size: 24rpx;
						margin-top: 28rpx;
					}

				}

				.wrap {
					padding: 28rpx;
					border-bottom: 1rpx solid #EEEEEE;

					.title {
						font-size: 22rpx;
						font-weight: 700;
						margin-bottom: 10rpx;
					}

					.content {
						font-size: 22rpx;

					}

				}
			}

			.bottomBtn {
				position: fixed;
				bottom: 0;
				width: 100%;
				height: 120rpx;
				padding: 0 28rpx;
				border-top: 1rpx solid #EEEEEE;
				background: #FFFFFF;

				.btn {
					background: #008489;
					color: #FFFFFF;
					padding: 18rpx 48rpx;
					border-radius: 8rpx;
				}

				.roomInfo {
					padding: 28rpx;
					border-bottom: 1rpx solid #EEEEEE;

					.dese {
						font-size: 20rpx;
						color: #b0722f;
						margin-bottom: 14rpx;
					}
				}

				.checkInTime {
					padding: 28rpx;
					border-bottom: 1rpx solid #EEEEEE;
					text-align: center;

					.label {
						font-size: 20rpx;
					}

					.value {
						color: #008489;
						font-weight: 600;
					}
				}

				.form {
					padding: 28rpx;
					border-bottom: 1rpx solid #EEEEEE;
				}

				.totalPrice {
					padding: 28rpx;
					border-bottom: 1rpx solid #EEEEEE;
				}

				.appointment {
					margin-top: 100rpx;
					padding: 28rpx;

					.btn {
						text-align: center;
					}
				}

				.money {
					font-size: 80rpx;
					color: $u-type-warning;
					position: relative;

					.close {
						position: absolute;
						top: 20rpx;
						right: 20rpx;
						line-height: 28rpx;
						font-size: 28rpx;
					}
				}

				.tips {
					color: $u-tips-color;
				}
			}
		}
	}
</style>
