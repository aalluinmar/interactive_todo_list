<template>
  <div class="hello">
      <!-- Update or Create Inventory -->
      <div v-if="createBoolean">
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" v-if="inventoryType === 'create'">Add Items</h5>
                    <h5 class="modal-title" v-if="inventoryType === 'update'">Update Item</h5>
                    <h5 class="modal-title" v-if="inventoryType === 'view'">View Item</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" @click="close()">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="row invent-form">
                        <div class="col-6 br-1 p-50">
                          <div class="mb-30">
                            <label>NAME<sup class="err">*</sup></label>
                            <Input v-if="inventoryType !== 'view'" v-model="name" :maxlength="50" show-word-limit placeholder="Enter Name" style="width: 200px" />
                            <h5 v-if="inventoryType === 'view'" style="font-weight:200;">{{name}}</h5>
                            <transition name="fade">
                              <div class="err">{{errorpayload.name}}</div>
                            </transition>
                          </div>
                          <div class="mb-30"><br>
                            <label>PRICE<sup class="err">*</sup></label>
                            <Input v-model="price" placeholder="Enter price" style="width: 200px" v-if="inventoryType !== 'view'"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46" />
                            <h5 v-if="inventoryType === 'view'" style="font-weight:200;">{{price}}</h5>
                            <transition name="fade">
                              <div class="err">{{errorpayload.price}}</div>
                            </transition>
                          </div>
                          <div class="mb-30"><br>
                            <label>QUANTITY<sup class="err">*</sup></label>
                            <Input v-model="quantity" placeholder="Enter quantity" style="width: 200px" v-if="inventoryType !== 'view'"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
                            <h5 v-if="inventoryType === 'view'" style="font-weight:200;">{{quantity}}</h5>
                            <transition name="fade">
                              <div class="err">{{errorpayload.quantity}}</div>
                            </transition>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="close()">Close</button>
                    <button type="button" class="btn btn-primary" v-if="inventoryType === 'create'" @click="createInvent">SAVE</button>
                    <button type="button" class="btn btn-primary" v-if="inventoryType === 'update'" @click="updateInvent">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>

<script src="./CreateInteractive.js"></script>
<style src="./CreateInteractive-styl.styl" lang="stylus" scoped></style>