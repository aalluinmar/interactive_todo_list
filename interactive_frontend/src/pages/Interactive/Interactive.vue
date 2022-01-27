
<template>
 <div class="container mt-100"><br>
    <!-- heading -->
    <div class="mb-4">
		<Divider><h4 class="p-bottom-2" style="color:#f15a22;padding: 20px 40px;">Inventory List</h4></Divider>
    </div>
	<!-- Inventory Add button -->
	<div class="search-bar d-flex clear-fix mb-3 pull-left">
      <button class="bg">
        <img src="@/assets/search.svg" alt="search" class="img-float">
      </button>
      <input v-on:keyup.enter="filteredName" type="text" v-model.trim="search" name="search" placeholder="Search by name">
      <button class="no-bg" v-if="search !== ''" @click="search = ''">
        &#10005;
      </button>
    </div>
	<div class="container">
		<div class="inventory-button">
			<button @click="closeInvent = true, inventoryTypeDetail = 'create', inventPropData = ''"><img src="@/assets/add.svg">Add</button>
		</div>
	</div>
	<div class="clearfix"></div>
	<div class="Inventory">
		<div class="container">
			<div class="users-table">
				<table class="user-table-tabs">
					<thead>
						<!-- <th></th> -->
						<th>NAME</th>
						<th>PRICE</th>
						<th>QUANTITY</th>
						<th>ACTIONS</th>
					</thead>
					<tr v-for="(item, index) in inventoryDataSearch" :key="index">
						<td class="text-capitalize">{{item.name}}</td>
						<td>
							<div>${{item.price}}</div>
						</td>
						<td>
							<div>{{item.quantity}}</div>
						</td>
						<td>
							<div>
								<Tooltip content="Update Inventory" placement="top">
									<a style="padding-right:10px" @click="closeInvent = true, inventoryTypeDetail = 'update', inventPropData = item">
										<img src="../../assets/edit-image.svg" class="img-fluid" alt="">
									</a>
								</Tooltip>
								<Tooltip content="View Inventory" placement="top">
									<a style="padding-right:10px" @click="closeInvent = true, inventoryTypeDetail = 'view', inventPropData = item">
										<img src="../../assets/view_icon.svg" class="img-fluid" alt="">
									</a>
								</Tooltip>
								<Tooltip content="Delete Inventory" placement="top">
									<a style="padding:10px" @click="deleteInventory(item.id)">
										<img src="../../assets/trash-inverse.svg" class="img-fluid" alt="">
									</a>
								</Tooltip>
							</div>
						</td>
					</tr>
				</table>
				<div v-if="inventoryDataSearch.length === 0">
					<p class="text-center" style="font-size: 14px; color: rgb(51, 102, 153); padding: 10px;">No Items Available</p>
				</div>
			</div>
		</div>
	</div>
   <div v-if="closeInvent">
      <CreateInteractive :createBoolean="closeInvent" :inventoryType="inventoryTypeDetail" :inventoryData="inventPropData" v-on:closeInventories="closeInventories"></CreateInteractive>
   </div>
 </div>
</template>
<script src="./Interactive.js"></script>
<style src="./Interactive-stylus.styl" lang="stylus" scoped></style>
