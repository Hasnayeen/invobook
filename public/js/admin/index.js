webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/aboutBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      loading: false,
      showUpdateModal: false,
      version: 0.0,
      lastUpdated: '',
      message: ''
    };
  },
  created: function created() {
    this.version = document.querySelector('meta[name="app-version"]').content;
    this.lastUpdated = document.querySelector('meta[name="last-updated"]').content;
  },

  methods: {
    checkForUpdates: function checkForUpdates() {
      var _this = this;

      this.loading = true;
      axios.get('/admin/check-for-update').then(function (response) {
        _this.loading = false;
        _this.message = response.data.message;
        _this.showUpdateModal = true;
      }).catch(function (error) {
        _this.loading = false;
        _this.message = error.response.data.message;
        _this.showUpdateModal = true;
      });
    },
    closeUpdateModal: function closeUpdateModal() {
      this.loading = false;
      this.showUpdateModal = false;
    },
    updateSoftware: function updateSoftware() {
      var _this2 = this;

      this.loading = true;
      axios.get('/admin/update-software').then(function (response) {
        _this2.loading = false;
        _this2.message = response.data.message;
        _this2.showUpdateModal = false;
      }).catch(function (error) {
        _this2.loading = false;
        _this2.message = error.response.data.message;
        _this2.showUpdateModal = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/activityBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      activity: 'activity',
      user: 'user',
      date: 'date',
      loading: false,
      activities: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('admin/activities').then(function (response) {
      _this.activities = response.data.activities;
    }).catch(function (error) {
      console.log(error.response);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/authBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rolesBoard__ = __webpack_require__("./resources/assets/js/components/admin/rolesBoard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rolesBoard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rolesBoard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__permissionsBoard__ = __webpack_require__("./resources/assets/js/components/admin/permissionsBoard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__permissionsBoard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__permissionsBoard__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { rolesBoard: __WEBPACK_IMPORTED_MODULE_0__rolesBoard___default.a, permissionsBoard: __WEBPACK_IMPORTED_MODULE_1__permissionsBoard___default.a },
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      activeColumn: ''
    };
  },
  beforeUpdate: function beforeUpdate() {
    if (this.activeColumn === '') {
      this.activeColumn = 'roles';
    }
  },

  methods: {
    activateThisColumn: function activateThisColumn(column) {
      if (column != this.active) {
        this.activeColumn = column;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutBoard_vue__ = __webpack_require__("./resources/assets/js/components/admin/aboutBoard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutBoard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__aboutBoard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authBoard_vue__ = __webpack_require__("./resources/assets/js/components/admin/authBoard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authBoard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__authBoard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usersBoard_vue__ = __webpack_require__("./resources/assets/js/components/admin/usersBoard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usersBoard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__usersBoard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activityBoard_vue__ = __webpack_require__("./resources/assets/js/components/admin/activityBoard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activityBoard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__activityBoard_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: { aboutBoard: __WEBPACK_IMPORTED_MODULE_0__aboutBoard_vue___default.a, authBoard: __WEBPACK_IMPORTED_MODULE_1__authBoard_vue___default.a, usersBoard: __WEBPACK_IMPORTED_MODULE_2__usersBoard_vue___default.a, activityBoard: __WEBPACK_IMPORTED_MODULE_3__activityBoard_vue___default.a },
  props: {
    users: {
      required: true,
      type: Array
    }
  },
  data: function data() {
    return {
      active: 'users'
    };
  },
  methods: {
    activateThisTab: function activateThisTab(tab) {
      if (tab != this.active) {
        this.active = tab;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/permissionsBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_attachPermissionForm__ = __webpack_require__("./resources/assets/js/components/forms/attachPermissionForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_attachPermissionForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forms_attachPermissionForm__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { attachPermissionForm: __WEBPACK_IMPORTED_MODULE_0__forms_attachPermissionForm___default.a },
  props: {
    activeColumn: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      permissions: [],
      attachPermissionFormShown: false,
      permissionId: null
    };
  },
  watch: {
    activeColumn: 'getPermissions'
  },
  methods: {
    getPermissions: function getPermissions() {
      var _this = this;

      if (this.activeColumn === 'permissions' && this.permissions.length < 1) {
        axios.get('/admin/permissions').then(function (response) {
          _this.permissions = response.data.permissions;
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    showAttachPermissionForm: function showAttachPermissionForm(id) {
      this.permissionId = id;
      this.attachPermissionFormShown = true;
    },
    closeAttachPermissionForm: function closeAttachPermissionForm() {
      this.attachPermissionFormShown = false;
    },
    permissionAttachedToRole: function permissionAttachedToRole(role) {
      var _this2 = this;

      if (!this.permissions.filter(function (permission) {
        return permission.id === _this2.permissionId;
      })[0].roles.some(function (item) {
        return item.id === role.id;
      })) {
        this.permissions.filter(function (permission) {
          return permission.id === _this2.permissionId;
        })[0].roles.push(role);
      }
      this.attachPermissionFormShown = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/rolesBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_createRoleForm__ = __webpack_require__("./resources/assets/js/components/forms/createRoleForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forms_createRoleForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__forms_createRoleForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_assignPermissionForm__ = __webpack_require__("./resources/assets/js/components/forms/assignPermissionForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_assignPermissionForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__forms_assignPermissionForm__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { createRoleForm: __WEBPACK_IMPORTED_MODULE_0__forms_createRoleForm___default.a, assignPermissionForm: __WEBPACK_IMPORTED_MODULE_1__forms_assignPermissionForm___default.a },
  props: {
    activeColumn: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      roles: [],
      createRoleFormShown: false,
      assignPermissionFormShown: false,
      roleId: 0
    };
  },
  beforeUpdate: function beforeUpdate() {
    var _this = this;

    if (this.roles.length < 1) {
      axios.get('/admin/roles').then(function (response) {
        _this.roles = response.data.roles;
      }).catch(function (error) {
        console.log(error);
      });
    }
  },

  methods: {
    showCreateRoleForm: function showCreateRoleForm() {
      this.createRoleFormShown = true;
    },
    closeCreateRoleForm: function closeCreateRoleForm() {
      this.createRoleFormShown = false;
    },
    newRoleCreated: function newRoleCreated(role) {
      this.roles.push(role);
      this.createRoleFormShown = false;
    },
    deleteRole: function deleteRole(id, index) {
      var _this2 = this;

      axios.delete('/admin/roles/' + id).then(function (response) {
        _this2.roles.splice(index, 1);
      }).catch(function (error) {
        console.log(error.response.data.message);
      });
    },
    showAssignPermissionForm: function showAssignPermissionForm(id) {
      this.roleId = id;
      this.assignPermissionFormShown = true;
    },
    closeAssignPermissionForm: function closeAssignPermissionForm() {
      this.assignPermissionFormShown = false;
    },
    permissionAssigned: function permissionAssigned(permission) {
      var _this3 = this;

      if (!this.roles.filter(function (role) {
        return role.id === _this3.roleId;
      })[0].permissions.some(function (perm) {
        return perm.id === permission.id;
      })) {
        this.roles.filter(function (role) {
          return role.id === _this3.roleId;
        })[0].permissions.push(permission);
      }
      this.assignPermissionFormShown = false;
    },
    revokePermission: function revokePermission(roleId, permissionId, index) {
      var _this4 = this;

      axios.delete('/admin/roles/' + roleId + '/permissions', { permission_id: permissionId }).then(function (response) {
        _this4.roles.filter(function (role) {
          return role.id === roleId;
        })[0].permissions.splice(index, 1);
      }).catch(function (error) {
        console.log(error.response.data.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/usersBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_inviteModal_vue__ = __webpack_require__("./resources/assets/js/components/partials/inviteModal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_inviteModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_inviteModal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeTab: {
      required: true,
      type: String
    },
    users: {
      required: true,
      type: Array
    }
  },
  components: { inviteModal: __WEBPACK_IMPORTED_MODULE_0__partials_inviteModal_vue___default.a }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/assignPermissionForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['formShown', 'roleId'],
  data: function data() {
    return {
      permissions: [],
      permission_id: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('admin/permissions').then(function (response) {
      _this.permissions = response.data.permissions;
    }).catch(function (error) {
      console.log(error.response.data.message);
    });
  },

  methods: {
    closeForm: function closeForm() {
      this.$emit('close');
    },
    assignPermission: function assignPermission() {
      var _this2 = this;

      axios.post('/admin/roles/' + this.roleId + '/permissions', { permission_id: this.permission_id }).then(function (response) {
        _this2.permission_id = null;
        _this2.$emit('permission-assigned', response.data.permission);
      }).catch(function (error) {
        console.log(error.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/attachPermissionForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['formShown', 'permissionId'],
  data: function data() {
    return {
      roles: [],
      roleId: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('admin/roles').then(function (response) {
      _this.roles = response.data.roles;
    }).catch(function (error) {
      console.log(error.response.data.message);
    });
  },

  methods: {
    closeForm: function closeForm() {
      this.$emit('close');
    },
    attachPermission: function attachPermission() {
      var _this2 = this;

      axios.post('/admin/roles/' + this.roleId + '/permissions', { permission_id: this.permissionId }).then(function (response) {
        _this2.roleId = null;
        _this2.$emit('permission-attached', response.data.role);
      }).catch(function (error) {
        console.log(error.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/createRoleForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['formShown'],
  data: function data() {
    return {
      name: ''
    };
  },
  methods: {
    closeForm: function closeForm() {
      this.$emit('close');
    },
    createRole: function createRole() {
      var _this = this;

      axios.post('/admin/roles', { name: this.name }).then(function (response) {
        _this.name = '';
        _this.$emit('role-created', response.data.role);
      }).catch(function (error) {
        console.log(error.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/inviteModal.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showInviteMemberForm: false,
      name: '',
      email: ''
    };
  },
  methods: {
    openModal: function openModal() {
      this.showInviteMemberForm = true;
    },
    closeModal: function closeModal() {
      this.showInviteMemberForm = false;
    },
    sendInvitation: function sendInvitation() {
      var _this = this;

      axios.post('/register/invite', {
        name: this.name,
        email: this.email
      }).then(function (response) {
        if (response.data.status == 'success') {
          EventBus.$emit('notification', response.data.message, response.data.status);
          _this.name = '';
          _this.email = '';
          _this.showInviteMemberForm = false;
        }
      }).catch(function (error) {
        EventBus.$emit('notification', error.response.data.message, error.response.data.status);
        _this.name = '';
        _this.email = '';
        _this.showInviteMemberForm = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/navbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notificationDropdown__ = __webpack_require__("./resources/assets/js/components/partials/notificationDropdown.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notificationDropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notificationDropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profileDropdown__ = __webpack_require__("./resources/assets/js/components/partials/profileDropdown.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profileDropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__profileDropdown__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { notificationDropdown: __WEBPACK_IMPORTED_MODULE_0__notificationDropdown___default.a, profileDropdown: __WEBPACK_IMPORTED_MODULE_1__profileDropdown___default.a },
  data: function data() {
    return {
      user: navbar.user,
      token: Laravel.csrfToken,
      url: navbar.navUrl
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationDropdown.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: navbar.user,
      token: Laravel.csrfToken,
      url: navbar.navUrl,
      notificationShown: false,
      unreadNotification: false
    };
  },
  methods: {
    toggleNotification: function toggleNotification(event) {
      if (this.notificationShown) {
        document.body.removeEventListener("keyup", this.hideNotification);
        this.hideNotification(event);
      } else {
        document.body.addEventListener("keyup", this.hideNotification);
        this.showNotification();
      }
    },
    showNotification: function showNotification(event) {
      if (this.profileDropdownShown) {
        this.profileDropdownShown = false;
      }
      this.notificationShown = true;
    },
    hideNotification: function hideNotification(event) {
      if (event.type === "keyup" && event.key !== "Escape") {
        return false;
      }
      this.notificationShown = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationPopup.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notificationShown: false,
      message: '',
      messageType: ''
    };
  },
  methods: {
    closeNotification: function closeNotification() {
      this.notificationShown = false;
    },
    showNotification: function showNotification(message, messageType) {
      var _this = this;

      this.message = message;
      this.messageType = messageType;
      this.notificationShown = true;
      setTimeout(function () {
        _this.closeNotification();
      }, 3000);
    }
  },
  created: function created() {
    EventBus.$on('notification', this.showNotification);
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off('notification', this.showNotification);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/profileDropdown.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: navbar.user,
      token: Laravel.csrfToken,
      url: navbar.navUrl,
      avatar: "",
      profileUrl: navbar.navUrl.site + "/users/" + navbar.user.username,
      profileDropdownShown: false
    };
  },
  methods: {
    logoutUser: function logoutUser(event) {
      event.preventDefault();
      document.getElementById("logout-form").submit();
    },
    toggleProfileDropdown: function toggleProfileDropdown(event) {
      if (this.profileDropdownShown) {
        this.hideProfileDropdown(event);
        document.body.removeEventListener("keyup", this.hideProfileDropdown);
      } else {
        this.showProfileDropdown();
        document.body.addEventListener("keyup", this.hideProfileDropdown);
      }
    },
    showProfileDropdown: function showProfileDropdown(event) {
      if (this.notificationShown) {
        this.notificationShown = false;
      }
      this.profileDropdownShown = true;
    },
    hideProfileDropdown: function hideProfileDropdown(event) {
      if (event.type === "keyup" && event.key !== "Escape") {
        return false;
      }
      this.profileDropdownShown = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/***/ (function(module, exports) {

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Connector = function () {
    function Connector(options) {
        classCallCheck(this, Connector);

        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }

    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

var Channel = function () {
    function Channel() {
        classCallCheck(this, Channel);
    }

    createClass(Channel, [{
        key: 'notification',
        value: function notification(callback) {
            return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
        }
    }, {
        key: 'listenForWhisper',
        value: function listenForWhisper(event, callback) {
            return this.listen('.client-' + event, callback);
        }
    }]);
    return Channel;
}();

var EventFormatter = function () {
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }

    createClass(EventFormatter, [{
        key: 'format',
        value: function format(event) {
            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
                return event.substr(1);
            } else if (this.namespace) {
                event = this.namespace + '.' + event;
            }
            return event.replace(/\./g, '\\');
        }
    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    function PusherChannel(pusher, name, options) {
        classCallCheck(this, PusherChannel);

        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }

    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

var PusherPrivateChannel = function (_PusherChannel) {
    inherits(PusherPrivateChannel, _PusherChannel);

    function PusherPrivateChannel() {
        classCallCheck(this, PusherPrivateChannel);
        return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
    }

    createClass(PusherPrivateChannel, [{
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPrivateChannel;
}(PusherChannel);

var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

        _this.events = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        _this.configureReconnector();
        return _this;
    }

    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            var _this2 = this;

            var listener = function listener(channel, data) {
                if (_this2.name == channel) {
                    callback(data);
                }
            };
            this.socket.on(event, listener);
            this.bind(event, listener);
        }
    }, {
        key: 'configureReconnector',
        value: function configureReconnector() {
            var _this3 = this;

            var listener = function listener() {
                _this3.subscribe();
            };
            this.socket.on('reconnect', listener);
            this.bind('reconnect', listener);
        }
    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
    }, {
        key: 'unbind',
        value: function unbind() {
            var _this4 = this;

            Object.keys(this.events).forEach(function (event) {
                _this4.events[event].forEach(function (callback) {
                    _this4.socket.removeListener(event, callback);
                });
                delete _this4.events[event];
            });
        }
    }]);
    return SocketIoChannel;
}(Channel);

var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.socket.emit('client event', {
                channel: this.name,
                event: 'client-' + eventName,
                data: data
            });
            return this;
        }
    }]);
    return SocketIoPrivateChannel;
}(SocketIoChannel);

var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('presence:leaving', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }]);
    return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        var _ref;

        classCallCheck(this, PusherConnector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = possibleConstructorReturn(this, (_ref = PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).call.apply(_ref, [this].concat(args)));

        _this.channels = {};
        return _this;
    }

    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            this.pusher = new Pusher(this.options.key, this.options);
        }
    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                if (_this2.channels[name]) {
                    _this2.channels[name].unsubscribe();
                    delete _this2.channels[name];
                }
            });
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        var _ref;

        classCallCheck(this, SocketIoConnector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = possibleConstructorReturn(this, (_ref = SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).call.apply(_ref, [this].concat(args)));

        _this.channels = {};
        return _this;
    }

    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            var io = this.getSocketIO();
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
    }, {
        key: 'getSocketIO',
        value: function getSocketIO() {
            if (typeof io !== 'undefined') {
                return io;
            }
            if (this.options.client !== 'undefined') {
                return this.options.client;
            }
            throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
        }
    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                if (_this2.channels[name]) {
                    _this2.channels[name].unsubscribe();
                    delete _this2.channels[name];
                }
            });
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

var Echo = function () {
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        if (typeof Vue === 'function' && Vue.http) {
            this.registerVueRequestInterceptor();
        }
        if (typeof axios === 'function') {
            this.registerAxiosRequestInterceptor();
        }
        if (typeof jQuery === 'function') {
            this.registerjQueryAjaxSetup();
        }
        if (this.options.broadcaster == 'pusher') {
            this.connector = new PusherConnector(this.options);
        } else if (this.options.broadcaster == 'socket.io') {
            this.connector = new SocketIoConnector(this.options);
        }
    }

    createClass(Echo, [{
        key: 'registerVueRequestInterceptor',
        value: function registerVueRequestInterceptor() {
            var _this = this;

            Vue.http.interceptors.push(function (request, next) {
                if (_this.socketId()) {
                    request.headers.set('X-Socket-ID', _this.socketId());
                }
                next();
            });
        }
    }, {
        key: 'registerAxiosRequestInterceptor',
        value: function registerAxiosRequestInterceptor() {
            var _this2 = this;

            axios.interceptors.request.use(function (config) {
                if (_this2.socketId()) {
                    config.headers['X-Socket-Id'] = _this2.socketId();
                }
                return config;
            });
        }
    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxSetup({
                    beforeSend: function beforeSend(xhr) {
                        if (_this3.socketId()) {
                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                        }
                    }
                });
            }
        }
    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
    }]);
    return Echo;
}();

module.exports = Echo;

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05456f18\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/profileDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "px-4 border-l flex items-center cursor-pointer p-4" },
    [
      _c(
        "div",
        {
          staticClass: "flex flex-row items-center",
          attrs: { id: "profile-dropdown" },
          on: { click: _vm.toggleProfileDropdown }
        },
        [
          _c("img", {
            staticClass: "w-10 h-10 rounded-full md:mr-2",
            attrs: { src: _vm.generateUrl(_vm.user.avatar) }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "text-grey-darker text-base no-underline hidden md:block"
            },
            [
              _vm._v("\n      " + _vm._s(_vm.user.name) + "\n      "),
              _c("i", {
                staticClass: "fa fa-angle-down",
                attrs: { "aria-hidden": "true" }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.profileDropdownShown
        ? _c(
            "div",
            {
              staticClass:
                "absolute bg-white w-48 pin-r mr-2 py-1 shadow-lg rounded z-50",
              staticStyle: { top: "3.5rem" },
              attrs: { id: "profile-menu" }
            },
            [
              _c(
                "a",
                {
                  staticClass:
                    "px-4 py-2 hover:bg-teal hover:text-white no-underline text-grey-dark block font-medium",
                  attrs: { href: _vm.profileUrl }
                },
                [_vm._m(0), _vm._v("\n          Your profile\n    ")]
              ),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("span", { staticClass: "block border-t" }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block",
                  attrs: { href: _vm.url.logout },
                  on: { click: _vm.logoutUser }
                },
                [_vm._m(3), _vm._v("\n      Logout\n    ")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticStyle: { display: "none" },
          attrs: { id: "logout-form", action: _vm.url.logout, method: "POST" }
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.token }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "w-6 inline-block" }, [
      _c("i", { staticClass: "pr-1 fa fa-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block",
        attrs: { href: "/admin" }
      },
      [
        _c("span", { staticClass: "w-6 inline-block" }, [
          _c("i", { staticClass: "pr-1 fas fa-shield-alt font-regular" })
        ]),
        _vm._v("\n      Admin\n    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block",
        attrs: { href: "#" }
      },
      [
        _c("span", { staticClass: "w-6 inline-block" }, [
          _c("i", { staticClass: "pr-1 fa fa-cog font-regular" })
        ]),
        _vm._v("\n      Settings\n    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "w-6 inline-block" }, [
      _c("i", { staticClass: "pr-1 fas fa-sign-out-alt font-regular" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05456f18", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-11fbf60f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/forms/attachPermissionForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10",
        class: { hidden: !_vm.formShown },
        staticStyle: { top: "20vh", left: "0", right: "0" }
      },
      [
        _c("div", { staticClass: "p-4" }, [
          _c("div", { staticClass: "p-4" }, [
            _c(
              "label",
              {
                staticClass:
                  "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",
                attrs: { for: "grid-first-name" }
              },
              [_vm._v("\n                  Roles\n              ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-row items-center" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.roleId,
                      expression: "roleId"
                    }
                  ],
                  staticClass:
                    "w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded",
                  attrs: { id: "user" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.roleId = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { selected: "", disabled: "", hidden: "" } },
                    [_vm._v("Select Permission to Add to Role")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.roles, function(role) {
                    return [
                      _c(
                        "option",
                        {
                          staticClass: "my-2 text-lg",
                          domProps: { value: role.id }
                        },
                        [_vm._v(_vm._s(role.name))]
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("i", {
                staticClass:
                  "w-1/6 fa fa-chevron-down pointer-events-none flex items-center text-grey-darker -ml-8"
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded"
          },
          [
            _c(
              "button",
              {
                staticClass:
                  "text-red-lighter hover:font-bold hover:text-red-light",
                on: { click: _vm.closeForm }
              },
              [_vm._v("Cancel")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded",
                on: { click: _vm.attachPermission }
              },
              [_vm._v("Attach")]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", {
      staticClass: "h-screen w-screen fixed pin bg-grey-darkest opacity-25",
      class: { hidden: !_vm.formShown },
      on: { click: _vm.closeForm }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11fbf60f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-130bd626\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/forms/createRoleForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10",
        class: { hidden: !_vm.formShown },
        staticStyle: { top: "12vh", left: "0", right: "0" }
      },
      [
        _c("div", { staticClass: "p-4" }, [
          _c("div", { staticClass: "p-4" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass:
                "appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4",
              attrs: {
                id: "grid-last-name",
                type: "text",
                placeholder: "New Role",
                required: ""
              },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded"
          },
          [
            _c(
              "button",
              {
                staticClass:
                  "text-red-lighter hover:font-bold hover:text-red-light",
                on: { click: _vm.closeForm }
              },
              [_vm._v("Cancel")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded",
                on: { click: _vm.createRole }
              },
              [_vm._v("Create")]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", {
      staticClass: "h-screen w-screen fixed pin bg-grey-darkest opacity-25",
      class: { hidden: !_vm.formShown },
      on: { click: _vm.closeForm }
    })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass:
          "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",
        attrs: { for: "grid-first-name" }
      },
      [
        _vm._v("\n                  Name "),
        _c("span", { staticClass: "text-grey capitalize" }, [
          _vm._v("(required)")
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-130bd626", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1691f239\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/forms/assignPermissionForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-10",
        class: { hidden: !_vm.formShown },
        staticStyle: { top: "20vh", left: "0", right: "0" }
      },
      [
        _c("div", { staticClass: "p-4" }, [
          _c("div", { staticClass: "p-4" }, [
            _c(
              "label",
              {
                staticClass:
                  "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",
                attrs: { for: "grid-first-name" }
              },
              [_vm._v("\n                  Permissions\n              ")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-row items-center" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.permission_id,
                      expression: "permission_id"
                    }
                  ],
                  staticClass:
                    "w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded",
                  attrs: { id: "user" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.permission_id = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { selected: "", disabled: "", hidden: "" } },
                    [_vm._v("Select Permission to Add to Role")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.permissions, function(permission) {
                    return [
                      _c(
                        "option",
                        {
                          staticClass: "my-2 text-lg",
                          domProps: { value: permission.id }
                        },
                        [_vm._v(_vm._s(permission.name))]
                      )
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("i", {
                staticClass:
                  "w-1/6 fa fa-chevron-down pointer-events-none flex items-center text-grey-darker -ml-8"
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded"
          },
          [
            _c(
              "button",
              {
                staticClass:
                  "text-red-lighter hover:font-bold hover:text-red-light",
                on: { click: _vm.closeForm }
              },
              [_vm._v("Cancel")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded",
                on: { click: _vm.assignPermission }
              },
              [_vm._v("Assign")]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", {
      staticClass: "h-screen w-screen fixed pin bg-grey-darkest opacity-25",
      class: { hidden: !_vm.formShown },
      on: { click: _vm.closeForm }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1691f239", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-24ab94e0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/activityBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "w-full mx-2 md:mx-auto",
      class: { hidden: _vm.activeTab != "activity" }
    },
    [
      _c("div", { staticClass: "text-grey-darker text-lg mb-4" }, [
        _vm._v("Filters")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-row flex-wrap text-grey-darkest -ml-4 mb-8" },
        [
          _c(
            "div",
            { staticClass: "mx-4 py-4 flex flex-row items-center relative" },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.activity,
                      expression: "activity"
                    }
                  ],
                  staticClass:
                    "w-full block appearance-none bg-white border border-grey rounded text-grey-darker py-3 px-4 pr-8",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.activity = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { value: "activity", disabled: "", hidden: "" } },
                    [_vm._v("Filter by Activity")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    { staticClass: "my-2 text-lg", domProps: { value: 1 } },
                    [_vm._v("name")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("i", {
                staticClass:
                  "fa fa-chevron-down pointer-events-none items-center text-grey-dark absolute pin-r mr-3"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mx-4 py-4 flex flex-row items-center relative" },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user,
                      expression: "user"
                    }
                  ],
                  staticClass:
                    "w-full block appearance-none bg-white border border-grey rounded text-grey-darker py-3 px-4 pr-8",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.user = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { value: "user", disabled: "", hidden: "" } },
                    [_vm._v("Filter by User")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    { staticClass: "my-2 text-lg", domProps: { value: 2 } },
                    [_vm._v("name")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("i", {
                staticClass:
                  "w-1/6 fa fa-chevron-down pointer-events-none items-center text-grey-dark absolute pin-r mr-3"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mx-4 py-4 flex flex-row items-center relative" },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.date,
                      expression: "date"
                    }
                  ],
                  staticClass:
                    "w-full block appearance-none bg-white border border-grey rounded text-grey-darker py-3 px-4 pr-8",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.date = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { value: "date", disabled: "", hidden: "" } },
                    [_vm._v("Filter by Date")]
                  ),
                  _vm._v(" "),
                  _c(
                    "option",
                    { staticClass: "my-2 text-lg", domProps: { value: 3 } },
                    [_vm._v("name")]
                  )
                ]
              ),
              _vm._v(" "),
              _c("i", {
                staticClass:
                  "w-1/6 fa fa-chevron-down pointer-events-none items-center text-grey-dark absolute pin-r mr-3"
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mx-4 py-4" }, [
            _c(
              "button",
              {
                staticClass:
                  "bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-8 rounded"
              },
              [
                _vm.loading
                  ? [_c("i", { staticClass: "fas fa-spinner fa-spin" })]
                  : _vm._e(),
                _vm._v("\n      Apply\n    ")
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-grey-darker" },
        [
          _vm._l(_vm.activities, function(value, key) {
            return [
              _c(
                "div",
                {
                  staticClass:
                    "bg-white border p-3 text-grey-dark inline-flex rounded"
                },
                [_vm._v(_vm._s(key))]
              ),
              _vm._v(" "),
              _vm._l(value, function(activity) {
                return [
                  _c("div", {
                    staticClass: "h-16 border-l ml-2 md:ml-6 -my-4"
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-row items-center" }, [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-sm px-4 md:mr-4" }, [
                      _vm._v(_vm._s(activity.time))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex-grow bg-white border px-4 md:px-8 py-4 rounded"
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "text-blue font-medium cursor-pointer no-underline",
                            attrs: {
                              href: "/users/" + activity.causer.username
                            }
                          },
                          [_vm._v(_vm._s(activity.causer.name))]
                        ),
                        _vm._v(
                          "\n            " +
                            _vm._s(activity.description) +
                            " " +
                            _vm._s(activity.subject_type) +
                            "\n            "
                        ),
                        activity.subject
                          ? _c(
                              "a",
                              {
                                staticClass:
                                  "text-blue font-medium cursor-pointer no-underline",
                                attrs: {
                                  href:
                                    activity.subject_type +
                                    "s/" +
                                    activity.subject_id
                                }
                              },
                              [_vm._v(_vm._s(activity.subject.name))]
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                ]
              }),
              _vm._v(" "),
              _c("div", { staticClass: "h-8 border-l ml-2 md:ml-6" })
            ]
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "h-16 border-l border-grey-lighter -mt-8 ml-2 md:ml-6"
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm._m(1)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "border-l flex flex-row items-center ml-2 md:ml-6 self-stretch"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "rounded-full bg-grey-lighter border border-pink p-1 -ml-2 md:mr-4"
          },
          [_c("div", { staticClass: "rounded-full bg-pink p-1" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-row justify-center mt-16 mb-8" },
      [
        _c(
          "div",
          {
            staticClass: "p-3 bg-white rounded shadow text-teal cursor-pointer"
          },
          [_vm._v("\n      Load More\n    ")]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24ab94e0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3cd7fe1b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationPopup.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "fixed pin-t bg-white text-lg rounded container mx-auto md:w-1/2 mt-16 py-6 px-8 shadow-lg z-50",
      class: [
        _vm.notificationShown ? "" : "hidden",
        _vm.messageType === "success" ? "text-teal-light" : "text-red"
      ],
      staticStyle: { left: "0", right: "0", "max-width": "640px" }
    },
    [
      _vm._v("\n    " + _vm._s(_vm.message) + " \n    "),
      _c(
        "div",
        { staticClass: "inline", on: { click: _vm.closeNotification } },
        [_c("i", { staticClass: "fas fa-times float-right cursor-pointer" })]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3cd7fe1b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46c8fb34\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "bg-white flex flex-row justify-between h-12 pl-4 md:px-4 shadow"
    },
    [
      _c(
        "a",
        {
          staticClass: "text-teal text-2xl no-underline self-center",
          attrs: { href: _vm.url.site }
        },
        [_vm._v("\n      GOODWORK\n  ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "md:flex" }, [
        _c(
          "div",
          { staticClass: "flex flex-row border-l h-full" },
          [_c("notification-dropdown"), _vm._v(" "), _c("profile-dropdown")],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-46c8fb34", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b16f8a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/aboutBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full mb-8", class: { hidden: _vm.activeTab != "about" } },
    [
      _c("div", { class: { hidden: !_vm.showUpdateModal } }, [
        _c("div", {
          staticClass: "absolute pin opacity-75 bg-grey",
          on: { click: _vm.closeUpdateModal }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded"
          },
          [
            _c("p", { staticClass: "py-2" }, [
              _vm._v("\n            " + _vm._s(_vm.message) + "\n          ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "flex flex-row justify-between pt-8 bg-grey-lighter rounded"
              },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "text-red-lighter hover:font-bold hover:text-red-light hover:border-red-light border-red-lighter border px-4 py-3 rounded",
                    on: { click: _vm.closeUpdateModal }
                  },
                  [_vm._v("Ok")]
                )
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "container mx-4 md:mx-auto py-8 bg-white rounded shadow text-center text-grey-darker"
        },
        [
          _c("div", { staticClass: "pb-4 text-3xl" }, [
            _vm._v("\n      Goodwork\n    ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "p-2" }, [
            _vm._v("\n      Version: "),
            _c("span", { staticClass: "pl-2 text-xl text-grey-darkest" }, [
              _vm._v(_vm._s(_vm.version))
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "no-underline p-4 m-4 mb-0 bg-white text-base text-teal rounded border border-grey-light",
                on: { click: _vm.checkForUpdates }
              },
              [
                _vm._v("\n        Check for Updates\n        "),
                _vm.loading
                  ? _c("div", { staticClass: "inline" }, [
                      _c("i", { staticClass: "fas fa-spinner fa-spin" })
                    ])
                  : _vm._e()
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "p-2" }, [
            _vm._v("\n      Last Updated: "),
            _c("span", { staticClass: "pl-2 text-xl text-grey-darkest" }, [
              _vm._v(_vm._s(_vm.lastUpdated))
            ])
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "pt-8" }, [
            _vm._v("\n      © " + _vm._s(new Date().getFullYear()) + " "),
            _c(
              "a",
              {
                staticClass: "text-xl text-blue-light no-underline",
                attrs: { href: "https://github.com/iluminar/" }
              },
              [_vm._v("Iluminar")]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2" }, [
      _vm._v("\n      Author: "),
      _c(
        "a",
        {
          staticClass: "pl-2 text-xl text-blue-light no-underline",
          attrs: { href: "https://hasnayeen.github.io/" }
        },
        [_vm._v("Nehal Hasnayeen")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2" }, [
      _vm._v("\n      Submit issue & feedback at: "),
      _c(
        "a",
        {
          staticClass: "pl-2 text-xl text-blue-light no-underline",
          attrs: { href: "https://github.com/iluminar/goodwork/issues" }
        },
        [_vm._v("Goodwork Issues")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b16f8a0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5693b395\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/usersBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full", class: { hidden: _vm.activeTab != "users" } },
    [
      _c("invite-modal"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "md:bg-white md:rounded md:shadow text-grey-darkest" },
        [
          _c(
            "div",
            { staticClass: "text-center text-3xl md:p-4 text-grey-darker" },
            [_vm._v("All Users")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.users, function(user) {
            return _c(
              "div",
              {
                staticClass:
                  "flex flex-row items-center text-left m-4 md:m-0 md:p-4 bg-teal-lighter md:bg-white rounded md:rounded-none shadow md:shadow-none relative"
              },
              [
                _vm._m(1, true),
                _vm._v(" "),
                _c("div", { staticClass: "w-1/4 md:w-1/6 px-2 md:px-0" }, [
                  _c("img", {
                    staticClass: "w-12 h-12 rounded-full",
                    attrs: { src: _vm.generateUrl(user.avatar) }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "w-3/4 md:w-5/6 flex flex-col md:flex-row md:items-center md:px-0 bg-white"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "md:w-1/5 text-left text-xl font-semibold text-grey-darker p-2 md:p-0"
                      },
                      [_vm._v(_vm._s(user.name))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "md:w-2/5 flex flex-row text-sm p-2 md:px-0 bg-grey-lightest md:bg-white"
                      },
                      [
                        _c("div", { staticClass: "w-1/2 text-left" }, [
                          _vm._v("@" + _vm._s(user.username))
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-1/2 text-right md:text-left" },
                          [_vm._v(_vm._s(user.role))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "md:w-2/5 flex flex-row text-sm p-2 md:px-0 bg-grey-lightest md:bg-white"
                      },
                      [
                        _c("div", { staticClass: "w-1/2" }, [
                          _vm._v(_vm._s(user.email))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-1/2" }, [
                          _vm._v(_vm._s(user.timezone))
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "hidden md:flex flex-row text-left bg-grey-lighter text-grey-dark p-4"
      },
      [
        _c("div", { staticClass: "w-1/6" }, [_vm._v("Avatar")]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/6" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/6" }, [_vm._v("Username")]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/6" }, [_vm._v("Role")]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/6" }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/6" }, [_vm._v("Timezone")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute pin-t pin-r m-2 text-grey-darker h-full md:flex flex-row items-center md:m-0 md:mr-4"
      },
      [_c("i", { staticClass: "fas fa-ellipsis-h cursor-pointer" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5693b395", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f6c00d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/authBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full mb-8", class: { hidden: _vm.activeTab != "auth" } },
    [
      _c(
        "div",
        { staticClass: "bg-white shadow rounded-t text-grey-darkest mt-4" },
        [
          _c("div", { staticClass: "flex flex-row text-center text-grey" }, [
            _c(
              "div",
              {
                staticClass: "w-1/2 font-semibold p-4 rounded-tl",
                class: [
                  _vm.activeColumn === "roles"
                    ? "text-indigo border-indigo border-b-2"
                    : "bg-white cursor-pointer"
                ],
                on: {
                  click: function($event) {
                    _vm.activateThisColumn("roles")
                  }
                }
              },
              [_vm._v("\n        Roles\n      ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "w-1/2 font-semibold p-4",
                class: [
                  _vm.activeColumn === "permissions"
                    ? "text-indigo border-indigo border-b-2"
                    : "bg-white cursor-pointer"
                ],
                on: {
                  click: function($event) {
                    _vm.activateThisColumn("permissions")
                  }
                }
              },
              [_vm._v("\n        Permissions\n      ")]
            )
          ]),
          _vm._v(" "),
          _c("roles-board", { attrs: { activeColumn: _vm.activeColumn } }),
          _vm._v(" "),
          _c("permissions-board", { attrs: { activeColumn: _vm.activeColumn } })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f6c00d2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67fc5ccb\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "container md:mx-auto md:px-4 md:my-6 w-full md:w-md lg:w-lg xl:w-xl xxl:w-2xl border-t md:border-0"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "flex flex-row justify-between md:justify-around md:my-6 py-2 md:py-4 bg-white shadow md:rounded text-grey"
        },
        [
          _c(
            "div",
            {
              class: [
                _vm.active === "users"
                  ? "text-teal-dark font-semibold border-teal border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-4"
                  : "cursor-pointer",
                "text-center w-1/2"
              ],
              on: {
                click: function($event) {
                  _vm.activateThisTab("users")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-users text-xl md:text-2xl" }),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs font-regular pt-2" }, [
                _vm._v("Users")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              class: [
                _vm.active === "auth"
                  ? "text-teal-dark font-semibold border-teal border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-4"
                  : "cursor-pointer",
                "text-center w-1/2"
              ],
              on: {
                click: function($event) {
                  _vm.activateThisTab("auth")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-lock-open text-xl md:text-2xl" }),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs font-regular pt-2" }, [
                _vm._v("Roles & Permissions")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              class: [
                _vm.active === "activity"
                  ? "text-teal-dark font-semibold border-teal border-b-2 pb-2 md:pb-4 -mb-2 md:-mb-4"
                  : "cursor-pointer",
                "text-center w-1/2"
              ],
              on: {
                click: function($event) {
                  _vm.activateThisTab("activity")
                }
              }
            },
            [
              _c("i", { staticClass: "fas fa-bolt text-xl md:text-2xl" }),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs font-regular pt-2" }, [
                _vm._v("Activities")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              class: [
                _vm.active === "about"
                  ? "text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-2 md:-mb-4"
                  : "cursor-pointer",
                "text-center w-1/2"
              ],
              on: {
                click: function($event) {
                  _vm.activateThisTab("about")
                }
              }
            },
            [
              _c("i", {
                staticClass: "fas fa-info-circle text-xl md:text-2xl"
              }),
              _vm._v(" "),
              _c("span", { staticClass: "block text-xs font-regular pt-2" }, [
                _vm._v("About")
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-row flex-wrap justify-start mt-4" },
        [
          _c("usersBoard", {
            attrs: { users: _vm.users, activeTab: _vm.active }
          }),
          _vm._v(" "),
          _c("authBoard", {
            attrs: { users: _vm.users, activeTab: _vm.active }
          }),
          _vm._v(" "),
          _c("activityBoard", { attrs: { activeTab: _vm.active } }),
          _vm._v(" "),
          _c("aboutBoard", { attrs: { activeTab: _vm.active } })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67fc5ccb", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7b74c4be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/inviteModal.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-4 text-center" }, [
    _c(
      "button",
      {
        staticClass:
          "no-underline p-2 my-4 mb-0 bg-white text-base text-teal rounded shadow",
        on: { click: _vm.openModal }
      },
      [_vm._v("Invite New Member")]
    ),
    _vm._v(" "),
    _c("div", { class: { hidden: !_vm.showInviteMemberForm } }, [
      _c("div", {
        staticClass: "absolute pin opacity-75 bg-grey z-10",
        on: { click: _vm.closeModal }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "fixed pin-x md:w-1/3 z-10 bg-grey-lighter mx-2 md:mx-auto p-8 rounded"
        },
        [
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "John Doe" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "john@example.com" },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex flex-row justify-between pt-8 bg-grey-lighter rounded"
            },
            [
              _c(
                "button",
                {
                  staticClass: "text-red-light hover:font-bold",
                  on: { click: _vm.closeModal }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded",
                  on: { click: _vm.sendInvitation }
                },
                [_vm._v("Send Invitation")]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b74c4be", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c5a6a300\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/rolesBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white rounded-b",
      class: { hidden: _vm.activeColumn !== "roles" }
    },
    [
      _c("create-role-form", {
        attrs: { "form-shown": _vm.createRoleFormShown },
        on: {
          close: _vm.closeCreateRoleForm,
          "role-created": _vm.newRoleCreated
        }
      }),
      _vm._v(" "),
      _c("assign-permission-form", {
        attrs: {
          roleId: _vm.roleId,
          "form-shown": _vm.assignPermissionFormShown
        },
        on: {
          close: _vm.closeAssignPermissionForm,
          "permission-assigned": _vm.permissionAssigned
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "mx-4 text-center" }, [
        _c(
          "button",
          {
            staticClass:
              "no-underline p-3 m-8 -mb-4 text-white text-base bg-teal-light rounded shadow-xl",
            on: { click: _vm.showCreateRoleForm }
          },
          [_vm._v("Add New Role")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "px-6 py-8 flex flex-row flex-wrap justify-center text-grey-darker"
        },
        _vm._l(_vm.roles, function(role, index) {
          return _c(
            "div",
            { staticClass: "bg-white shadow-xl w-80 my-4 md:m-6 rounded-lg" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "p-4 text-xl uppercase text-indigo bg-grey-lighter rounded-t-lg flex flex-row"
                },
                [
                  _vm._v("\n        " + _vm._s(role.name) + "\n          "),
                  _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          _vm.deleteRole(role.id, index)
                        }
                      }
                    },
                    [
                      role.deletable
                        ? _c("i", {
                            staticClass:
                              "ml-1 pl-1 fas fa-trash-alt cursor-pointer text-base"
                          })
                        : _vm._e()
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "px-4 pb-2 bg-grey-lighter text-sm flex flex-row"
                },
                [
                  _c("span", [_vm._v("\n          Permissions\n        ")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          _vm.showAssignPermissionForm(role.id)
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "ml-2 fas fa-plus-circle text-indigo cursor-pointer"
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              role.permissions.length > 0
                ? _c(
                    "div",
                    { staticClass: "flex flex-row flex-wrap m-2" },
                    _vm._l(role.permissions, function(permission, index) {
                      return _c(
                        "div",
                        {
                          staticClass:
                            "py-1 px-2 m-2 rounded-full font-medium bg-pink text-white text-sm flex flex-row items-center"
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(permission.name) +
                              " \n          "
                          ),
                          _c(
                            "div",
                            {
                              on: {
                                click: function($event) {
                                  _vm.revokePermission(
                                    role.id,
                                    permission.id,
                                    index
                                  )
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "ml-1 pl-1 fas fa-trash-alt cursor-pointer"
                              })
                            ]
                          )
                        ]
                      )
                    })
                  )
                : _c(
                    "div",
                    {
                      staticClass: "py-1 px-2 m-2 font-medium text-grey-darker"
                    },
                    [_vm._v("\n        Don't have any permission yet\n      ")]
                  )
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c5a6a300", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c78c254e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/permissionsBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white rounded-b",
      class: { hidden: _vm.activeColumn !== "permissions" }
    },
    [
      _c("attach-permission-form", {
        attrs: {
          permissionId: _vm.permissionId,
          "form-shown": _vm.attachPermissionFormShown
        },
        on: {
          close: _vm.closeAttachPermissionForm,
          "permission-attached": _vm.permissionAttachedToRole
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            " px-6 py-8 flex flex-row flex-wrap justify-center text-grey-darker"
        },
        _vm._l(_vm.permissions, function(permission) {
          return _c(
            "div",
            { staticClass: "bg-white shadow-xl w-80 my-4 md:m-6 rounded-lg" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "p-4 text-xl uppercase text-indigo bg-grey-lighter rounded-t-lg"
                },
                [_vm._v("\n        " + _vm._s(permission.name) + "\n      ")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "px-4 pb-2 bg-grey-lighter text-sm flex flex-row"
                },
                [
                  _c("span", [_vm._v("\n          Roles\n        ")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          _vm.showAttachPermissionForm(permission.id)
                        }
                      }
                    },
                    [
                      _c("i", {
                        staticClass:
                          "ml-2 fas fa-plus-circle text-indigo cursor-pointer"
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              permission.roles.length > 0
                ? _c(
                    "div",
                    { staticClass: "flex flex-row flex-wrap m-2" },
                    _vm._l(permission.roles, function(role) {
                      return _c(
                        "div",
                        {
                          staticClass:
                            "py-1 px-2 m-2 rounded-full font-medium bg-pink text-white text-sm flex flex-row items-center"
                        },
                        [
                          _vm._v("\n          " + _vm._s(role.name) + " "),
                          _c("i", {
                            staticClass:
                              "ml-1 pl-1 fas fa-trash-alt cursor-pointer"
                          })
                        ]
                      )
                    })
                  )
                : _c(
                    "div",
                    {
                      staticClass: "py-1 px-2 m-2 font-medium text-grey-darker"
                    },
                    [_vm._v("\n        Don't belongs to any role yet\n      ")]
                  )
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c78c254e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5af9c1c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "px-4 self-center" }, [
    _c(
      "div",
      {
        staticClass: "text-teal-light text-base no-underline cursor-pointer",
        attrs: { id: "notification" },
        on: { click: _vm.toggleNotification }
      },
      [
        _c("i", {
          staticClass: "far fa-bell font-bold text-xl",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _vm.unreadNotification
          ? _c("i", {
              staticClass:
                "fa fa-circle text-red-light text-sm absolute pin-t mt-3 ml-3",
              attrs: { "aria-hidden": "true" }
            })
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _vm.notificationShown
      ? _c(
          "div",
          {
            staticClass:
              "absolute bg-white w-64 mt-5 mr-8 py-4 shadow-lg rounded z-50",
            staticStyle: { right: "5%" }
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "flex flex-row items-center list-reset px-4 py-2 text-grey-dark no-underline block",
                attrs: { href: "#" }
              },
              [
                _c("img", {
                  staticClass: "w-10 h-10 rounded-full mr-2",
                  attrs: { src: _vm.generateUrl(_vm.user.avatar) }
                }),
                _vm._v(" "),
                _vm._m(0)
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "flex flex-row items-center list-reset px-4 py-2 text-grey-dark no-underline block",
                attrs: { href: "#" }
              },
              [
                _c("img", {
                  staticClass: "w-10 h-10 rounded-full mr-2",
                  attrs: { src: _vm.generateUrl(_vm.user.avatar) }
                }),
                _vm._v(" "),
                _vm._m(1)
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "block border-t" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "list-reset px-4 pt-2 text-blue-light text-center no-underline block",
                attrs: { href: "/notifications" }
              },
              [_vm._v("\n            View All\n        ")]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "py-1 text-sm" }, [
        _vm._v("\n                    commented on your post\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-1 text-xs" }, [
        _vm._v("\n                    2 min ago\n                ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "py-1 text-sm" }, [
        _vm._v("\n                    commented on your post\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-1 text-xs" }, [
        _vm._v("\n                    2 min ago\n                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e5af9c1c", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_echo__ = __webpack_require__("./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_echo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_laravel_echo__);

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

window.axios = __webpack_require__("./node_modules/axios/index.js");

window.luxon = __webpack_require__("./node_modules/luxon/build/cjs-browser/luxon.js");

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'

  /**
   * Echo exposes an expressive API for subscribing to channels and listening
   * for events that are broadcast by Laravel. Echo and event broadcasting
   * allows your team to easily build robust real-time web applications.
   */

};if (typeof io !== 'undefined') {
  window.Echo = new __WEBPACK_IMPORTED_MODULE_0_laravel_echo___default.a({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
  });
}

window.Vue.mixin({
  methods: {
    generateUrl: function generateUrl(value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg';
      value = value.toString();
      return window.location.protocol + '//' + window.location.host + '/' + value;
    }
  }
});

window.EventBus = new Vue();

/***/ }),

/***/ "./resources/assets/js/components/admin/aboutBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/aboutBoard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b16f8a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/aboutBoard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/aboutBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b16f8a0", Component.options)
  } else {
    hotAPI.reload("data-v-4b16f8a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/activityBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/activityBoard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-24ab94e0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/activityBoard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/activityBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24ab94e0", Component.options)
  } else {
    hotAPI.reload("data-v-24ab94e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/authBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/authBoard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f6c00d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/authBoard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/authBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f6c00d2", Component.options)
  } else {
    hotAPI.reload("data-v-5f6c00d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67fc5ccb\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67fc5ccb", Component.options)
  } else {
    hotAPI.reload("data-v-67fc5ccb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/permissionsBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/permissionsBoard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c78c254e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/permissionsBoard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/permissionsBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c78c254e", Component.options)
  } else {
    hotAPI.reload("data-v-c78c254e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/rolesBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/rolesBoard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c5a6a300\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/rolesBoard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/rolesBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5a6a300", Component.options)
  } else {
    hotAPI.reload("data-v-c5a6a300", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/admin/usersBoard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/admin/usersBoard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5693b395\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/admin/usersBoard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/usersBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5693b395", Component.options)
  } else {
    hotAPI.reload("data-v-5693b395", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/forms/assignPermissionForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/assignPermissionForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1691f239\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/forms/assignPermissionForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/forms/assignPermissionForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1691f239", Component.options)
  } else {
    hotAPI.reload("data-v-1691f239", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/forms/attachPermissionForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/attachPermissionForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-11fbf60f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/forms/attachPermissionForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/forms/attachPermissionForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11fbf60f", Component.options)
  } else {
    hotAPI.reload("data-v-11fbf60f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/forms/createRoleForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/forms/createRoleForm.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-130bd626\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/forms/createRoleForm.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/forms/createRoleForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-130bd626", Component.options)
  } else {
    hotAPI.reload("data-v-130bd626", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/inviteModal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/inviteModal.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7b74c4be\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/inviteModal.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/inviteModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b74c4be", Component.options)
  } else {
    hotAPI.reload("data-v-7b74c4be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/navbar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46c8fb34\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/navbar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46c8fb34", Component.options)
  } else {
    hotAPI.reload("data-v-46c8fb34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/notificationDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationDropdown.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5af9c1c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationDropdown.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/notificationDropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5af9c1c", Component.options)
  } else {
    hotAPI.reload("data-v-e5af9c1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/notificationPopup.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationPopup.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3cd7fe1b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationPopup.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/notificationPopup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cd7fe1b", Component.options)
  } else {
    hotAPI.reload("data-v-3cd7fe1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/profileDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/profileDropdown.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05456f18\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/profileDropdown.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/profileDropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05456f18", Component.options)
  } else {
    hotAPI.reload("data-v-05456f18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/admin/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__("./resources/assets/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_admin_index_vue__ = __webpack_require__("./resources/assets/js/components/admin/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_admin_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_admin_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue__ = __webpack_require__("./resources/assets/js/components/partials/navbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue__ = __webpack_require__("./resources/assets/js/components/partials/notificationPopup.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue__);





/* eslint-disable no-unused-vars */
var app = new Vue({
  el: '#app',
  components: {
    index: __WEBPACK_IMPORTED_MODULE_1__components_admin_index_vue___default.a, navbar: __WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue___default.a, notificationPopup: __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue___default.a
  }
});

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pages/admin/index.js");


/***/ })

},[7]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2Fib3V0Qm9hcmQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vYWN0aXZpdHlCb2FyZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9hdXRoQm9hcmQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vaW5kZXgudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vcGVybWlzc2lvbnNCb2FyZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9yb2xlc0JvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3VzZXJzQm9hcmQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXNzaWduUGVybWlzc2lvbkZvcm0udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXR0YWNoUGVybWlzc2lvbkZvcm0udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvY3JlYXRlUm9sZUZvcm0udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvaW52aXRlTW9kYWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlPzdiMGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2F0dGFjaFBlcm1pc3Npb25Gb3JtLnZ1ZT82OTI4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9jcmVhdGVSb2xlRm9ybS52dWU/OGJkZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXNzaWduUGVybWlzc2lvbkZvcm0udnVlPzE2ZDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2FjdGl2aXR5Qm9hcmQudnVlP2I1NTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZT9iZjkxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlP2U5YTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2Fib3V0Qm9hcmQudnVlPzQzN2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3VzZXJzQm9hcmQudnVlP2FkMjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2F1dGhCb2FyZC52dWU/MzI5NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vaW5kZXgudnVlPzBlNTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2ludml0ZU1vZGFsLnZ1ZT8wYTM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9yb2xlc0JvYXJkLnZ1ZT8xNjdiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9wZXJtaXNzaW9uc0JvYXJkLnZ1ZT9lZTA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWU/OWY1NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vYWJvdXRCb2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2FjdGl2aXR5Qm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9hdXRoQm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3Blcm1pc3Npb25zQm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9yb2xlc0JvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vdXNlcnNCb2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2Fzc2lnblBlcm1pc3Npb25Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXR0YWNoUGVybWlzc2lvbkZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9jcmVhdGVSb2xlRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2ludml0ZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJWdWUiLCJyZXF1aXJlIiwiYXhpb3MiLCJsdXhvbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIkxhcmF2ZWwiLCJjc3JmVG9rZW4iLCJpbyIsIkVjaG8iLCJicm9hZGNhc3RlciIsImhvc3QiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibWl4aW4iLCJtZXRob2RzIiwiZ2VuZXJhdGVVcmwiLCJ2YWx1ZSIsInRvU3RyaW5nIiwicHJvdG9jb2wiLCJFdmVudEJ1cyIsImFwcCIsImVsIiwiY29tcG9uZW50cyIsImluZGV4IiwibmF2YmFyIiwibm90aWZpY2F0aW9uUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTs7O2dCQUlBO1lBR0E7QUFKQTtBQURBOzs7ZUFPQTt1QkFDQTtlQUNBO21CQUNBO2VBRUE7QUFOQTs7OEJBT0E7c0VBQ0E7MkVBQ0E7QUFDQTs7OztBQUVBOztxQkFDQTtnQkFDQSxvREFDQTt3QkFDQTtzQ0FDQTtnQ0FDQTtBQUNBLGdDQUNBO3dCQUNBOzRDQUNBO2dDQUNBO0FBQ0E7QUFDQTtrREFDQTtxQkFDQTs2QkFDQTtBQUNBOztBQUNBOztxQkFDQTtnQkFDQSxtREFDQTt5QkFDQTt1Q0FDQTtpQ0FDQTtBQUNBLGdDQUNBO3lCQUNBOzZDQUNBO2lDQUNBO0FBQ0E7QUFFQTtBQWpDQTtBQWxCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VCQTs7O2dCQUlBO1lBR0E7QUFKQTtBQURBOzs7Z0JBT0E7WUFDQTtZQUNBO2VBQ0E7a0JBRUE7QUFOQTs7O0FBT0E7O2NBQ0EsNkNBQ0E7dUNBQ0E7QUFDQSw4QkFDQTt3QkFDQTtBQUNBO0FBQ0E7QUF0QkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7aUZBRUE7OztnQkFHQTtZQUdBO0FBSkE7QUFEQTs7O29CQVFBO0FBRkE7O3dDQUdBO2tDQUNBOzBCQUNBO0FBQ0E7QUFDQTs7OzREQUVBO2lDQUNBOzRCQUNBO0FBQ0E7QUFFQTtBQU5BO0FBaEJBLEc7Ozs7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsc0I7Ozs7Ozs7QUN4eEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0R0E7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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNc0IsTUFBTSxJQUFJdEIsR0FBSixDQUFRO0FBQ2xCdUIsTUFBSSxNQURjO0FBRWxCQyxjQUFZO0FBQ1ZDLFdBQUEsbUVBRFUsRUFDSEMsUUFBQSx1RUFERyxFQUNLQyxtQkFBQSxrRkFBQUE7QUFETDtBQUZNLENBQVIsQ0FBWixDIiwiZmlsZSI6Ii9qcy9hZG1pbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgOmNsYXNzPVwieydoaWRkZW4nOiAoYWN0aXZlVGFiICE9ICdhYm91dCcpfVwiIGNsYXNzPVwidy1mdWxsIG1iLThcIj5cbiAgPGRpdiA6Y2xhc3M9XCJ7J2hpZGRlbic6ICFzaG93VXBkYXRlTW9kYWx9XCI+XG4gICAgICA8ZGl2IEBjbGljaz1cImNsb3NlVXBkYXRlTW9kYWxcIiBjbGFzcz1cImFic29sdXRlIHBpbiBvcGFjaXR5LTc1IGJnLWdyZXlcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaXhlZCBwaW4teCB3LTEvMyB6LTEwIGJnLWdyZXktbGlnaHRlciBteC1hdXRvIHAtOCByb3VuZGVkXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJweS0yXCI+XG4gICAgICAgICAgICB7eyBtZXNzYWdlIH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBwdC04IGJnLWdyZXktbGlnaHRlciByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY2xvc2VVcGRhdGVNb2RhbFwiIGNsYXNzPVwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHQgaG92ZXI6Ym9yZGVyLXJlZC1saWdodCBib3JkZXItcmVkLWxpZ2h0ZXIgYm9yZGVyIHB4LTQgcHktMyByb3VuZGVkXCI+T2s8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LTQgbWQ6bXgtYXV0byBweS04IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93IHRleHQtY2VudGVyIHRleHQtZ3JleS1kYXJrZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGItNCB0ZXh0LTN4bFwiPlxuICAgICAgR29vZHdvcmtcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicC0yXCI+XG4gICAgICBWZXJzaW9uOiA8c3BhbiBjbGFzcz1cInBsLTIgdGV4dC14bCB0ZXh0LWdyZXktZGFya2VzdFwiPnt7IHZlcnNpb24gfX08L3NwYW4+XG4gICAgICA8YnV0dG9uIEBjbGljaz1cImNoZWNrRm9yVXBkYXRlc1wiIGNsYXNzPVwibm8tdW5kZXJsaW5lIHAtNCBtLTQgbWItMCBiZy13aGl0ZSB0ZXh0LWJhc2UgdGV4dC10ZWFsIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgIENoZWNrIGZvciBVcGRhdGVzXG4gICAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIiBjbGFzcz1cImlubGluZVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicC0yXCI+XG4gICAgICBMYXN0IFVwZGF0ZWQ6IDxzcGFuIGNsYXNzPVwicGwtMiB0ZXh0LXhsIHRleHQtZ3JleS1kYXJrZXN0XCI+e3sgbGFzdFVwZGF0ZWQgfX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAtMlwiPlxuICAgICAgQXV0aG9yOiA8YSBocmVmPVwiaHR0cHM6Ly9oYXNuYXllZW4uZ2l0aHViLmlvL1wiIGNsYXNzPVwicGwtMiB0ZXh0LXhsIHRleHQtYmx1ZS1saWdodCBuby11bmRlcmxpbmVcIj5OZWhhbCBIYXNuYXllZW48L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAtMlwiPlxuICAgICAgU3VibWl0IGlzc3VlICYgZmVlZGJhY2sgYXQ6IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaWx1bWluYXIvZ29vZHdvcmsvaXNzdWVzXCIgY2xhc3M9XCJwbC0yIHRleHQteGwgdGV4dC1ibHVlLWxpZ2h0IG5vLXVuZGVybGluZVwiPkdvb2R3b3JrIElzc3VlczwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicHQtOFwiPlxuICAgICAgwqkge3sgKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkgfX0gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pbHVtaW5hci9cIiBjbGFzcz1cInRleHQteGwgdGV4dC1ibHVlLWxpZ2h0IG5vLXVuZGVybGluZVwiPklsdW1pbmFyPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiAgXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGFjdGl2ZVRhYjoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHNob3dVcGRhdGVNb2RhbDogZmFsc2UsXG4gICAgdmVyc2lvbjogMC4wLFxuICAgIGxhc3RVcGRhdGVkOiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgfSksXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMudmVyc2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImFwcC12ZXJzaW9uXCJdJykuY29udGVudFxuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJsYXN0LXVwZGF0ZWRcIl0nKS5jb250ZW50XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja0ZvclVwZGF0ZXMgKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgYXhpb3MuZ2V0KCcvYWRtaW4vY2hlY2stZm9yLXVwZGF0ZScpXG4gICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICAgdGhpcy5zaG93VXBkYXRlTW9kYWwgPSB0cnVlXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgIHRoaXMuc2hvd1VwZGF0ZU1vZGFsID0gdHJ1ZVxuICAgICAgICAgICB9KVxuICAgIH0sXG4gICAgY2xvc2VVcGRhdGVNb2RhbCAoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5zaG93VXBkYXRlTW9kYWwgPSBmYWxzZVxuICAgIH0sXG4gICAgdXBkYXRlU29mdHdhcmUgKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgYXhpb3MuZ2V0KCcvYWRtaW4vdXBkYXRlLXNvZnR3YXJlJylcbiAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICB0aGlzLnNob3dVcGRhdGVNb2RhbCA9IGZhbHNlXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgIHRoaXMuc2hvd1VwZGF0ZU1vZGFsID0gZmFsc2VcbiAgICAgICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9hYm91dEJvYXJkLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiA6Y2xhc3M9XCJ7J2hpZGRlbic6IChhY3RpdmVUYWIgIT0gJ2FjdGl2aXR5Jyl9XCIgY2xhc3M9XCJ3LWZ1bGwgbXgtMiBtZDpteC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1sZyBtYi00XCI+RmlsdGVyczwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCB0ZXh0LWdyZXktZGFya2VzdCAtbWwtNCBtYi04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXgtNCBweS00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImFjdGl2aXR5XCIgY2xhc3M9XCJ3LWZ1bGwgYmxvY2sgYXBwZWFyYW5jZS1ub25lIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JleSByb3VuZGVkIHRleHQtZ3JleS1kYXJrZXIgcHktMyBweC00IHByLThcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWN0aXZpdHlcIiBkaXNhYmxlZCBoaWRkZW4+RmlsdGVyIGJ5IEFjdGl2aXR5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCIxXCIgY2xhc3M9XCJteS0yIHRleHQtbGdcIj5uYW1lPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93biBwb2ludGVyLWV2ZW50cy1ub25lIGl0ZW1zLWNlbnRlciB0ZXh0LWdyZXktZGFyayBhYnNvbHV0ZSBwaW4tciBtci0zXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXgtNCBweS00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInVzZXJcIiBjbGFzcz1cInctZnVsbCBibG9jayBhcHBlYXJhbmNlLW5vbmUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmV5IHJvdW5kZWQgdGV4dC1ncmV5LWRhcmtlciBweS0zIHB4LTQgcHItOFwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1c2VyXCIgZGlzYWJsZWQgaGlkZGVuPkZpbHRlciBieSBVc2VyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCIyXCIgY2xhc3M9XCJteS0yIHRleHQtbGdcIj5uYW1lPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aSBjbGFzcz1cInctMS82IGZhIGZhLWNoZXZyb24tZG93biBwb2ludGVyLWV2ZW50cy1ub25lIGl0ZW1zLWNlbnRlciB0ZXh0LWdyZXktZGFyayBhYnNvbHV0ZSBwaW4tciBtci0zXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXgtNCBweS00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCI+XG4gICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImRhdGVcIiBjbGFzcz1cInctZnVsbCBibG9jayBhcHBlYXJhbmNlLW5vbmUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmV5IHJvdW5kZWQgdGV4dC1ncmV5LWRhcmtlciBweS0zIHB4LTQgcHItOFwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXRlXCIgZGlzYWJsZWQgaGlkZGVuPkZpbHRlciBieSBEYXRlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCIzXCIgY2xhc3M9XCJteS0yIHRleHQtbGdcIj5uYW1lPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aSBjbGFzcz1cInctMS82IGZhIGZhLWNoZXZyb24tZG93biBwb2ludGVyLWV2ZW50cy1ub25lIGl0ZW1zLWNlbnRlciB0ZXh0LWdyZXktZGFyayBhYnNvbHV0ZSBwaW4tciBtci0zXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXgtNCBweS00XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYmctdGVhbC1saWdodCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXRlYWwtZGFyayBweS0zIHB4LTggcm91bmRlZFwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIEFwcGx5XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXJcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiBhY3Rpdml0aWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZy13aGl0ZSBib3JkZXIgcC0zIHRleHQtZ3JleS1kYXJrIGlubGluZS1mbGV4IHJvdW5kZWRcIj57eyBrZXkgfX08L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYWN0aXZpdHkgaW4gdmFsdWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC0xNiBib3JkZXItbCBtbC0yIG1kOm1sLTYgLW15LTRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItbCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBtbC0yIG1kOm1sLTYgc2VsZi1zdHJldGNoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkLWZ1bGwgYmctZ3JleS1saWdodGVyIGJvcmRlciBib3JkZXItcGluayBwLTEgLW1sLTIgbWQ6bXItNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkLWZ1bGwgYmctcGluayBwLTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtIHB4LTQgbWQ6bXItNFwiPnt7IGFjdGl2aXR5LnRpbWUgfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgYmctd2hpdGUgYm9yZGVyIHB4LTQgbWQ6cHgtOCBweS00IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3VzZXJzLycgKyBhY3Rpdml0eS5jYXVzZXIudXNlcm5hbWVcIiBjbGFzcz1cInRleHQtYmx1ZSBmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlciBuby11bmRlcmxpbmVcIj57eyBhY3Rpdml0eS5jYXVzZXIubmFtZSB9fTwvYT5cbiAgICAgICAgICAgICAge3sgYWN0aXZpdHkuZGVzY3JpcHRpb24gfX0ge3sgYWN0aXZpdHkuc3ViamVjdF90eXBlIH19XG4gICAgICAgICAgICAgIDxhIHYtaWY9XCJhY3Rpdml0eS5zdWJqZWN0XCIgOmhyZWY9XCJhY3Rpdml0eS5zdWJqZWN0X3R5cGUgKyAncy8nICsgYWN0aXZpdHkuc3ViamVjdF9pZFwiIGNsYXNzPVwidGV4dC1ibHVlIGZvbnQtbWVkaXVtIGN1cnNvci1wb2ludGVyIG5vLXVuZGVybGluZVwiPnt7IGFjdGl2aXR5LnN1YmplY3QubmFtZSB9fTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaC04IGJvcmRlci1sIG1sLTIgbWQ6bWwtNlwiPjwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJoLTE2IGJvcmRlci1sIGJvcmRlci1ncmV5LWxpZ2h0ZXIgLW10LTggbWwtMiBtZDptbC02XCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtdC0xNiBtYi04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0zIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93IHRleHQtdGVhbCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICBMb2FkIE1vcmVcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgYWN0aXZlVGFiOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhY3Rpdml0eTogJ2FjdGl2aXR5JyxcbiAgICB1c2VyOiAndXNlcicsXG4gICAgZGF0ZTogJ2RhdGUnLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGFjdGl2aXRpZXM6IFtdXG4gIH0pLFxuICBjcmVhdGVkICgpIHtcbiAgICBheGlvcy5nZXQoJ2FkbWluL2FjdGl2aXRpZXMnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZpdGllcyA9IHJlc3BvbnNlLmRhdGEuYWN0aXZpdGllc1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vYWN0aXZpdHlCb2FyZC52dWUiLCI8dGVtcGxhdGU+XG48ZGl2IDpjbGFzcz1cInsnaGlkZGVuJzogKGFjdGl2ZVRhYiAhPSAnYXV0aCcpfVwiIGNsYXNzPVwidy1mdWxsIG1iLThcIj5cbiAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHNoYWRvdyByb3VuZGVkLXQgdGV4dC1ncmV5LWRhcmtlc3QgbXQtNFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IHRleHQtY2VudGVyIHRleHQtZ3JleVwiPlxuICAgICAgPGRpdiBAY2xpY2s9XCJhY3RpdmF0ZVRoaXNDb2x1bW4oJ3JvbGVzJylcIiA6Y2xhc3M9XCJbYWN0aXZlQ29sdW1uID09PSAncm9sZXMnID8gJ3RleHQtaW5kaWdvIGJvcmRlci1pbmRpZ28gYm9yZGVyLWItMicgOiAnYmctd2hpdGUgY3Vyc29yLXBvaW50ZXInXVwiIGNsYXNzPVwidy0xLzIgZm9udC1zZW1pYm9sZCBwLTQgcm91bmRlZC10bFwiPlxuICAgICAgICBSb2xlc1xuICAgICAgPC9kaXY+ICAgIFxuICAgICAgPGRpdiBAY2xpY2s9XCJhY3RpdmF0ZVRoaXNDb2x1bW4oJ3Blcm1pc3Npb25zJylcIiA6Y2xhc3M9XCJbYWN0aXZlQ29sdW1uID09PSAncGVybWlzc2lvbnMnID8gJ3RleHQtaW5kaWdvIGJvcmRlci1pbmRpZ28gYm9yZGVyLWItMicgOiAnYmctd2hpdGUgY3Vyc29yLXBvaW50ZXInXVwiIGNsYXNzPVwidy0xLzIgZm9udC1zZW1pYm9sZCBwLTRcIj5cbiAgICAgICAgUGVybWlzc2lvbnNcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxyb2xlcy1ib2FyZCA6YWN0aXZlQ29sdW1uPVwiYWN0aXZlQ29sdW1uXCI+PC9yb2xlcy1ib2FyZD5cbiAgICA8cGVybWlzc2lvbnMtYm9hcmQgOmFjdGl2ZUNvbHVtbj1cImFjdGl2ZUNvbHVtblwiPjwvcGVybWlzc2lvbnMtYm9hcmQ+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvbGVzQm9hcmQgZnJvbSAnLi9yb2xlc0JvYXJkJ1xuaW1wb3J0IHBlcm1pc3Npb25zQm9hcmQgZnJvbSAnLi9wZXJtaXNzaW9uc0JvYXJkJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7cm9sZXNCb2FyZCwgcGVybWlzc2lvbnNCb2FyZH0sXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlVGFiOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhY3RpdmVDb2x1bW46ICcnXG4gIH0pLFxuICBiZWZvcmVVcGRhdGUgKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNvbHVtbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ29sdW1uID0gJ3JvbGVzJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFjdGl2YXRlVGhpc0NvbHVtbiAoY29sdW1uKSB7XG4gICAgICBpZiAoY29sdW1uICE9IHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ29sdW1uID0gY29sdW1uXG4gICAgICB9XG4gICAgfSxcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2F1dGhCb2FyZC52dWUiLCI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1kOm14LWF1dG8gbWQ6cHgtNCBtZDpteS02IHctZnVsbCBtZDp3LW1kIGxnOnctbGcgeGw6dy14bCB4eGw6dy0yeGwgYm9yZGVyLXQgbWQ6Ym9yZGVyLTBcIj5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktYXJvdW5kIG1kOm15LTYgcHktMiBtZDpweS00IGJnLXdoaXRlIHNoYWRvdyBtZDpyb3VuZGVkIHRleHQtZ3JleVwiPlxuICAgIDxkaXYgQGNsaWNrPVwiYWN0aXZhdGVUaGlzVGFiKCd1c2VycycpXCJcbiAgICAgIDpjbGFzcz1cIlsoYWN0aXZlID09PSAndXNlcnMnKSA/ICd0ZXh0LXRlYWwtZGFyayBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTIgcGItMiBtZDpwYi00IC1tYi0yIG1kOi1tYi00JyA6ICdjdXJzb3ItcG9pbnRlcicsICd0ZXh0LWNlbnRlciB3LTEvMiddXCI+XG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VycyB0ZXh0LXhsIG1kOnRleHQtMnhsXCI+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LXhzIGZvbnQtcmVndWxhciBwdC0yXCI+VXNlcnM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBAY2xpY2s9XCJhY3RpdmF0ZVRoaXNUYWIoJ2F1dGgnKVwiXG4gICAgICA6Y2xhc3M9XCJbKGFjdGl2ZSA9PT0gJ2F1dGgnKSA/ICd0ZXh0LXRlYWwtZGFyayBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTIgcGItMiBtZDpwYi00IC1tYi0yIG1kOi1tYi00JyA6ICdjdXJzb3ItcG9pbnRlcicsICd0ZXh0LWNlbnRlciB3LTEvMiddXCI+XG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb2NrLW9wZW4gdGV4dC14bCBtZDp0ZXh0LTJ4bFwiPjwvaT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC14cyBmb250LXJlZ3VsYXIgcHQtMlwiPlJvbGVzICYgUGVybWlzc2lvbnM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBAY2xpY2s9XCJhY3RpdmF0ZVRoaXNUYWIoJ2FjdGl2aXR5JylcIlxuICAgICAgOmNsYXNzPVwiWyhhY3RpdmUgPT09ICdhY3Rpdml0eScpID8gJ3RleHQtdGVhbC1kYXJrIGZvbnQtc2VtaWJvbGQgYm9yZGVyLXRlYWwgYm9yZGVyLWItMiBwYi0yIG1kOnBiLTQgLW1iLTIgbWQ6LW1iLTQnIDogJ2N1cnNvci1wb2ludGVyJywgJ3RleHQtY2VudGVyIHctMS8yJ11cIj5cbiAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWJvbHQgdGV4dC14bCBtZDp0ZXh0LTJ4bFwiPjwvaT5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC14cyBmb250LXJlZ3VsYXIgcHQtMlwiPkFjdGl2aXRpZXM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBAY2xpY2s9XCJhY3RpdmF0ZVRoaXNUYWIoJ2Fib3V0JylcIlxuICAgICAgOmNsYXNzPVwiWyhhY3RpdmUgPT09ICdhYm91dCcpID8gJ3RleHQtdGVhbC1kYXJrIGZvbnQtc2VtaWJvbGQgYm9yZGVyLXRlYWwgYm9yZGVyLWItMiBwYi00IC1tYi0yIG1kOi1tYi00JyA6ICdjdXJzb3ItcG9pbnRlcicsICd0ZXh0LWNlbnRlciB3LTEvMiddXCI+XG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS1pbmZvLWNpcmNsZSB0ZXh0LXhsIG1kOnRleHQtMnhsXCI+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LXhzIGZvbnQtcmVndWxhciBwdC0yXCI+QWJvdXQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0IG10LTRcIj5cbiAgICA8dXNlcnNCb2FyZCA6dXNlcnM9XCJ1c2Vyc1wiIDphY3RpdmVUYWI9XCJhY3RpdmVcIj48L3VzZXJzQm9hcmQ+XG4gICAgPGF1dGhCb2FyZCA6dXNlcnM9XCJ1c2Vyc1wiIDphY3RpdmVUYWI9XCJhY3RpdmVcIj48L2F1dGhCb2FyZD5cbiAgICA8YWN0aXZpdHlCb2FyZCA6YWN0aXZlVGFiPVwiYWN0aXZlXCI+PC9hY3Rpdml0eUJvYXJkPlxuICAgIDxhYm91dEJvYXJkIDphY3RpdmVUYWI9XCJhY3RpdmVcIj48L2Fib3V0Qm9hcmQ+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGFib3V0Qm9hcmQgZnJvbSAnLi9hYm91dEJvYXJkLnZ1ZSdcbmltcG9ydCBhdXRoQm9hcmQgZnJvbSAnLi9hdXRoQm9hcmQudnVlJ1xuaW1wb3J0IHVzZXJzQm9hcmQgZnJvbSAnLi91c2Vyc0JvYXJkLnZ1ZSdcbmltcG9ydCBhY3Rpdml0eUJvYXJkIGZyb20gJy4vYWN0aXZpdHlCb2FyZC52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHthYm91dEJvYXJkLCBhdXRoQm9hcmQsIHVzZXJzQm9hcmQsIGFjdGl2aXR5Qm9hcmR9LFxuICBwcm9wczoge1xuICAgIHVzZXJzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGFjdGl2ZTogJ3VzZXJzJyxcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICBhY3RpdmF0ZVRoaXNUYWIgKHRhYikge1xuICAgICAgaWYgKHRhYiAhPSB0aGlzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRhYlxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9pbmRleC52dWUiLCI8dGVtcGxhdGU+XG48ZGl2IDpjbGFzcz1cInsnaGlkZGVuJzogKGFjdGl2ZUNvbHVtbiAhPT0gJ3Blcm1pc3Npb25zJyl9XCIgY2xhc3M9XCJiZy13aGl0ZSByb3VuZGVkLWJcIj5cbiAgPGF0dGFjaC1wZXJtaXNzaW9uLWZvcm0gOnBlcm1pc3Npb25JZD1cInBlcm1pc3Npb25JZFwiIDpmb3JtLXNob3duPVwiYXR0YWNoUGVybWlzc2lvbkZvcm1TaG93blwiIEBjbG9zZT1cImNsb3NlQXR0YWNoUGVybWlzc2lvbkZvcm1cIiBAcGVybWlzc2lvbi1hdHRhY2hlZD1cInBlcm1pc3Npb25BdHRhY2hlZFRvUm9sZVwiPjwvYXR0YWNoLXBlcm1pc3Npb24tZm9ybT5cblxuICA8ZGl2IGNsYXNzPVwiIHB4LTYgcHktOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyZXktZGFya2VyXCI+XG4gICAgPGRpdiB2LWZvcj1cInBlcm1pc3Npb24gaW4gcGVybWlzc2lvbnNcIiBjbGFzcz1cImJnLXdoaXRlIHNoYWRvdy14bCB3LTgwIG15LTQgbWQ6bS02IHJvdW5kZWQtbGdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTQgdGV4dC14bCB1cHBlcmNhc2UgdGV4dC1pbmRpZ28gYmctZ3JleS1saWdodGVyIHJvdW5kZWQtdC1sZ1wiPlxuICAgICAgICB7eyBwZXJtaXNzaW9uLm5hbWUgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInB4LTQgcGItMiBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1zbSBmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFJvbGVzXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJzaG93QXR0YWNoUGVybWlzc2lvbkZvcm0ocGVybWlzc2lvbi5pZClcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cIm1sLTIgZmFzIGZhLXBsdXMtY2lyY2xlIHRleHQtaW5kaWdvIGN1cnNvci1wb2ludGVyXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWlmPVwicGVybWlzc2lvbi5yb2xlcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBtLTJcIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cInJvbGUgaW4gcGVybWlzc2lvbi5yb2xlc1wiIGNsYXNzPVwicHktMSBweC0yIG0tMiByb3VuZGVkLWZ1bGwgZm9udC1tZWRpdW0gYmctcGluayB0ZXh0LXdoaXRlIHRleHQtc20gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7eyByb2xlLm5hbWUgfX0gPGkgY2xhc3M9XCJtbC0xIHBsLTEgZmFzIGZhLXRyYXNoLWFsdCBjdXJzb3ItcG9pbnRlclwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwicHktMSBweC0yIG0tMiBmb250LW1lZGl1bSB0ZXh0LWdyZXktZGFya2VyXCI+XG4gICAgICAgIERvbid0IGJlbG9uZ3MgdG8gYW55IHJvbGUgeWV0XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gICAgICBcbiAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXR0YWNoUGVybWlzc2lvbkZvcm0gZnJvbSAnLi8uLi9mb3Jtcy9hdHRhY2hQZXJtaXNzaW9uRm9ybSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge2F0dGFjaFBlcm1pc3Npb25Gb3JtfSxcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVDb2x1bW46IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHBlcm1pc3Npb25zOiBbXSxcbiAgICBhdHRhY2hQZXJtaXNzaW9uRm9ybVNob3duOiBmYWxzZSxcbiAgICBwZXJtaXNzaW9uSWQ6IG51bGxcbiAgfSksXG4gIHdhdGNoOiB7XG4gICAgYWN0aXZlQ29sdW1uOiAnZ2V0UGVybWlzc2lvbnMnXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRQZXJtaXNzaW9ucyAoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVDb2x1bW4gPT09ICdwZXJtaXNzaW9ucycgJiYgdGhpcy5wZXJtaXNzaW9ucy5sZW5ndGggPCAxKSB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FkbWluL3Blcm1pc3Npb25zJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gcmVzcG9uc2UuZGF0YS5wZXJtaXNzaW9uc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0F0dGFjaFBlcm1pc3Npb25Gb3JtIChpZCkge1xuICAgICAgdGhpcy5wZXJtaXNzaW9uSWQgPSBpZFxuICAgICAgdGhpcy5hdHRhY2hQZXJtaXNzaW9uRm9ybVNob3duID0gdHJ1ZVxuICAgIH0sXG4gICAgY2xvc2VBdHRhY2hQZXJtaXNzaW9uRm9ybSAoKSB7XG4gICAgICB0aGlzLmF0dGFjaFBlcm1pc3Npb25Gb3JtU2hvd24gPSBmYWxzZVxuICAgIH0sXG4gICAgcGVybWlzc2lvbkF0dGFjaGVkVG9Sb2xlIChyb2xlKSB7XG4gICAgICBpZiAoISB0aGlzLnBlcm1pc3Npb25zLmZpbHRlcihwZXJtaXNzaW9uID0+IHBlcm1pc3Npb24uaWQgPT09IHRoaXMucGVybWlzc2lvbklkKVswXS5yb2xlcy5zb21lKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcm9sZS5pZCkpIHtcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5maWx0ZXIocGVybWlzc2lvbiA9PiBwZXJtaXNzaW9uLmlkID09PSB0aGlzLnBlcm1pc3Npb25JZClbMF0ucm9sZXMucHVzaChyb2xlKVxuICAgICAgfVxuICAgICAgdGhpcy5hdHRhY2hQZXJtaXNzaW9uRm9ybVNob3duID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9wZXJtaXNzaW9uc0JvYXJkLnZ1ZSIsIjx0ZW1wbGF0ZT5cbjxkaXYgOmNsYXNzPVwieydoaWRkZW4nOiAoYWN0aXZlQ29sdW1uICE9PSAncm9sZXMnKX1cIiBjbGFzcz1cImJnLXdoaXRlIHJvdW5kZWQtYlwiPlxuICA8Y3JlYXRlLXJvbGUtZm9ybSA6Zm9ybS1zaG93bj1cImNyZWF0ZVJvbGVGb3JtU2hvd25cIiBAY2xvc2U9XCJjbG9zZUNyZWF0ZVJvbGVGb3JtXCIgQHJvbGUtY3JlYXRlZD1cIm5ld1JvbGVDcmVhdGVkXCI+PC9jcmVhdGUtcm9sZS1mb3JtPlxuICA8YXNzaWduLXBlcm1pc3Npb24tZm9ybSA6cm9sZUlkPVwicm9sZUlkXCIgOmZvcm0tc2hvd249XCJhc3NpZ25QZXJtaXNzaW9uRm9ybVNob3duXCIgQGNsb3NlPVwiY2xvc2VBc3NpZ25QZXJtaXNzaW9uRm9ybVwiIEBwZXJtaXNzaW9uLWFzc2lnbmVkPVwicGVybWlzc2lvbkFzc2lnbmVkXCI+PC9hc3NpZ24tcGVybWlzc2lvbi1mb3JtPlxuXG4gIDxkaXYgY2xhc3M9XCJteC00IHRleHQtY2VudGVyXCI+XG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJzaG93Q3JlYXRlUm9sZUZvcm1cIiBjbGFzcz1cIm5vLXVuZGVybGluZSBwLTMgbS04IC1tYi00IHRleHQtd2hpdGUgdGV4dC1iYXNlIGJnLXRlYWwtbGlnaHQgcm91bmRlZCBzaGFkb3cteGxcIj5BZGQgTmV3IFJvbGU8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJweC02IHB5LTggZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdGV4dC1ncmV5LWRhcmtlclwiPlxuICAgIDxkaXYgdi1mb3I9XCIocm9sZSwgaW5kZXgpIGluIHJvbGVzXCIgY2xhc3M9XCJiZy13aGl0ZSBzaGFkb3cteGwgdy04MCBteS00IG1kOm0tNiByb3VuZGVkLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC00IHRleHQteGwgdXBwZXJjYXNlIHRleHQtaW5kaWdvIGJnLWdyZXktbGlnaHRlciByb3VuZGVkLXQtbGcgZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICB7eyByb2xlLm5hbWUgfX1cbiAgICAgICAgICA8ZGl2IEBjbGljaz1cImRlbGV0ZVJvbGUocm9sZS5pZCwgaW5kZXgpXCI+XG4gICAgICAgICAgICA8aSB2LWlmPVwicm9sZS5kZWxldGFibGVcIiBjbGFzcz1cIm1sLTEgcGwtMSBmYXMgZmEtdHJhc2gtYWx0IGN1cnNvci1wb2ludGVyIHRleHQtYmFzZVwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInB4LTQgcGItMiBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1zbSBmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFBlcm1pc3Npb25zXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJzaG93QXNzaWduUGVybWlzc2lvbkZvcm0ocm9sZS5pZClcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cIm1sLTIgZmFzIGZhLXBsdXMtY2lyY2xlIHRleHQtaW5kaWdvIGN1cnNvci1wb2ludGVyXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWlmPVwicm9sZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwXCIgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBtLTJcIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cIihwZXJtaXNzaW9uLCBpbmRleCkgaW4gcm9sZS5wZXJtaXNzaW9uc1wiIGNsYXNzPVwicHktMSBweC0yIG0tMiByb3VuZGVkLWZ1bGwgZm9udC1tZWRpdW0gYmctcGluayB0ZXh0LXdoaXRlIHRleHQtc20gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7eyBwZXJtaXNzaW9uLm5hbWUgfX0gXG4gICAgICAgICAgPGRpdiBAY2xpY2s9XCJyZXZva2VQZXJtaXNzaW9uKHJvbGUuaWQsIHBlcm1pc3Npb24uaWQsIGluZGV4KVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtbC0xIHBsLTEgZmFzIGZhLXRyYXNoLWFsdCBjdXJzb3ItcG9pbnRlclwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwicHktMSBweC0yIG0tMiBmb250LW1lZGl1bSB0ZXh0LWdyZXktZGFya2VyXCI+XG4gICAgICAgIERvbid0IGhhdmUgYW55IHBlcm1pc3Npb24geWV0XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gICAgICBcbiAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgY3JlYXRlUm9sZUZvcm0gZnJvbSAnLi8uLi9mb3Jtcy9jcmVhdGVSb2xlRm9ybSdcbmltcG9ydCBhc3NpZ25QZXJtaXNzaW9uRm9ybSBmcm9tICcuLy4uL2Zvcm1zL2Fzc2lnblBlcm1pc3Npb25Gb3JtJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7Y3JlYXRlUm9sZUZvcm0sIGFzc2lnblBlcm1pc3Npb25Gb3JtfSxcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmVDb2x1bW46IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHJvbGVzOiBbXSxcbiAgICBjcmVhdGVSb2xlRm9ybVNob3duOiBmYWxzZSxcbiAgICBhc3NpZ25QZXJtaXNzaW9uRm9ybVNob3duOiBmYWxzZSxcbiAgICByb2xlSWQ6IDBcbiAgfSksXG4gIGJlZm9yZVVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucm9sZXMubGVuZ3RoIDwgMSkge1xuICAgICAgYXhpb3MuZ2V0KCcvYWRtaW4vcm9sZXMnKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb2xlcyA9IHJlc3BvbnNlLmRhdGEucm9sZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIH0pXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvd0NyZWF0ZVJvbGVGb3JtICgpIHtcbiAgICAgIHRoaXMuY3JlYXRlUm9sZUZvcm1TaG93biA9IHRydWVcbiAgICB9LFxuICAgIGNsb3NlQ3JlYXRlUm9sZUZvcm0gKCkge1xuICAgICAgdGhpcy5jcmVhdGVSb2xlRm9ybVNob3duID0gZmFsc2VcbiAgICB9LFxuICAgIG5ld1JvbGVDcmVhdGVkIChyb2xlKSB7XG4gICAgICB0aGlzLnJvbGVzLnB1c2gocm9sZSlcbiAgICAgIHRoaXMuY3JlYXRlUm9sZUZvcm1TaG93biA9IGZhbHNlXG4gICAgfSxcbiAgICBkZWxldGVSb2xlIChpZCwgaW5kZXgpIHtcbiAgICAgIGF4aW9zLmRlbGV0ZSgnL2FkbWluL3JvbGVzLycgKyBpZClcbiAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgdGhpcy5yb2xlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgIH0pXG4gICAgfSxcbiAgICBzaG93QXNzaWduUGVybWlzc2lvbkZvcm0gKGlkKSB7XG4gICAgICB0aGlzLnJvbGVJZCA9IGlkXG4gICAgICB0aGlzLmFzc2lnblBlcm1pc3Npb25Gb3JtU2hvd24gPSB0cnVlXG4gICAgfSxcbiAgICBjbG9zZUFzc2lnblBlcm1pc3Npb25Gb3JtICgpIHtcbiAgICAgIHRoaXMuYXNzaWduUGVybWlzc2lvbkZvcm1TaG93biA9IGZhbHNlXG4gICAgfSxcbiAgICBwZXJtaXNzaW9uQXNzaWduZWQgKHBlcm1pc3Npb24pIHtcbiAgICAgIGlmICghIHRoaXMucm9sZXMuZmlsdGVyKHJvbGUgPT4gcm9sZS5pZCA9PT0gdGhpcy5yb2xlSWQpWzBdLnBlcm1pc3Npb25zLnNvbWUocGVybSA9PiBwZXJtLmlkID09PSBwZXJtaXNzaW9uLmlkKSkge1xuICAgICAgICB0aGlzLnJvbGVzLmZpbHRlcihyb2xlID0+IHJvbGUuaWQgPT09IHRoaXMucm9sZUlkKVswXS5wZXJtaXNzaW9ucy5wdXNoKHBlcm1pc3Npb24pXG4gICAgICB9XG4gICAgICB0aGlzLmFzc2lnblBlcm1pc3Npb25Gb3JtU2hvd24gPSBmYWxzZVxuICAgIH0sXG4gICAgcmV2b2tlUGVybWlzc2lvbiAocm9sZUlkLCBwZXJtaXNzaW9uSWQsIGluZGV4KSB7XG4gICAgICBheGlvcy5kZWxldGUoJy9hZG1pbi9yb2xlcy8nICsgcm9sZUlkICsgJy9wZXJtaXNzaW9ucycsIHtwZXJtaXNzaW9uX2lkOiBwZXJtaXNzaW9uSWR9KVxuICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICB0aGlzLnJvbGVzLmZpbHRlcihyb2xlID0+IHJvbGUuaWQgPT09IHJvbGVJZClbMF0ucGVybWlzc2lvbnMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICB9KVxuICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuICAgICAgICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3JvbGVzQm9hcmQudnVlIiwiPHRlbXBsYXRlPlxuPGRpdiA6Y2xhc3M9XCJ7J2hpZGRlbic6IChhY3RpdmVUYWIgIT0gJ3VzZXJzJyl9XCIgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgPGludml0ZS1tb2RhbD48L2ludml0ZS1tb2RhbD5cblxuICA8ZGl2IGNsYXNzPVwibWQ6Ymctd2hpdGUgbWQ6cm91bmRlZCBtZDpzaGFkb3cgdGV4dC1ncmV5LWRhcmtlc3RcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgbWQ6cC00IHRleHQtZ3JleS1kYXJrZXJcIj5BbGwgVXNlcnM8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIG1kOmZsZXggZmxleC1yb3cgdGV4dC1sZWZ0IGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFyayBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNlwiPkF2YXRhcjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInctMS82XCI+TmFtZTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInctMS82XCI+VXNlcm5hbWU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNlwiPlJvbGU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNlwiPkVtYWlsPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidy0xLzZcIj5UaW1lem9uZTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1mb3I9XCJ1c2VyIGluIHVzZXJzXCIgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciB0ZXh0LWxlZnQgbS00IG1kOm0tMCBtZDpwLTQgYmctdGVhbC1saWdodGVyIG1kOmJnLXdoaXRlIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lIHNoYWRvdyBtZDpzaGFkb3ctbm9uZSByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIHBpbi10IHBpbi1yIG0tMiB0ZXh0LWdyZXktZGFya2VyIGgtZnVsbCBtZDpmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBtZDptLTAgbWQ6bXItNFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy1oIGN1cnNvci1wb2ludGVyXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidy0xLzQgbWQ6dy0xLzYgcHgtMiBtZDpweC0wXCI+PGltZyBjbGFzcz1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGxcIiA6c3JjPVwiZ2VuZXJhdGVVcmwodXNlci5hdmF0YXIpXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidy0zLzQgbWQ6dy01LzYgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6cHgtMCBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0xLzUgdGV4dC1sZWZ0IHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyZXktZGFya2VyIHAtMiBtZDpwLTBcIj57eyB1c2VyLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kOnctMi81IGZsZXggZmxleC1yb3cgdGV4dC1zbSBwLTIgbWQ6cHgtMCBiZy1ncmV5LWxpZ2h0ZXN0IG1kOmJnLXdoaXRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yIHRleHQtbGVmdFwiPkB7eyB1c2VyLnVzZXJuYW1lIH19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yIHRleHQtcmlnaHQgbWQ6dGV4dC1sZWZ0XCI+e3sgdXNlci5yb2xlIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6dy0yLzUgZmxleCBmbGV4LXJvdyB0ZXh0LXNtIHAtMiBtZDpweC0wIGJnLWdyZXktbGlnaHRlc3QgbWQ6Ymctd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzJcIj57eyB1c2VyLmVtYWlsIH19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yXCI+e3sgdXNlci50aW1lem9uZSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiAgXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGludml0ZU1vZGFsIGZyb20gJy4vLi4vcGFydGlhbHMvaW52aXRlTW9kYWwudnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGFjdGl2ZVRhYjoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICB1c2Vyczoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0eXBlOiBBcnJheSxcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtpbnZpdGVNb2RhbH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi91c2Vyc0JvYXJkLnZ1ZSIsIjx0ZW1wbGF0ZT5cbjxkaXY+XG4gIDxkaXYgOmNsYXNzPVwieydoaWRkZW4nOiAhZm9ybVNob3dufVwiIGNsYXNzPVwiYWJzb2x1dGUgY29udGFpbmVyIG14LWF1dG8gdy01LzYgbWQ6dy0zLzUgbGc6dy0yLzUgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGcgei0xMFwiIHN0eWxlPVwidG9wOiAyMHZoO2xlZnQ6IDA7cmlnaHQ6IDA7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJncmlkLWZpcnN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInBlcm1pc3Npb25faWRcIiBjbGFzcz1cInctNS82IGJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JleS1saWdodGVyIGJvcmRlciBib3JkZXItZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgcHktMyBweC00IHByLTggcm91bmRlZFwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkIGhpZGRlbj5TZWxlY3QgUGVybWlzc2lvbiB0byBBZGQgdG8gUm9sZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJwZXJtaXNzaW9uIGluIHBlcm1pc3Npb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cInBlcm1pc3Npb24uaWRcIiBjbGFzcz1cIm15LTIgdGV4dC1sZ1wiPnt7IHBlcm1pc3Npb24ubmFtZSB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidy0xLzYgZmEgZmEtY2hldnJvbi1kb3duIHBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmV5LWRhcmtlciAtbWwtOFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNsb3NlRm9ybVwiIGNsYXNzPVwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFzc2lnblBlcm1pc3Npb25cIiBjbGFzcz1cImJnLXRlYWwtbGlnaHQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3ZlcjpiZy10ZWFsLWRhcmsgcHktNCBweC04IHJvdW5kZWRcIj5Bc3NpZ248L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBAY2xpY2s9XCJjbG9zZUZvcm1cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6ICFmb3JtU2hvd259XCIgY2xhc3M9XCJoLXNjcmVlbiB3LXNjcmVlbiBmaXhlZCBwaW4gYmctZ3JleS1kYXJrZXN0IG9wYWNpdHktMjVcIj48L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnZm9ybVNob3duJywgJ3JvbGVJZCddLFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHBlcm1pc3Npb25zOiBbXSxcbiAgICBwZXJtaXNzaW9uX2lkOiBudWxsXG4gIH0pLFxuICBtb3VudGVkICgpIHtcbiAgICBheGlvcy5nZXQoJ2FkbWluL3Blcm1pc3Npb25zJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IHJlc3BvbnNlLmRhdGEucGVybWlzc2lvbnNcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNsb3NlRm9ybSAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgfSxcbiAgICBhc3NpZ25QZXJtaXNzaW9uICgpIHtcbiAgICAgIGF4aW9zLnBvc3QoJy9hZG1pbi9yb2xlcy8nICsgdGhpcy5yb2xlSWQgKyAnL3Blcm1pc3Npb25zJywge3Blcm1pc3Npb25faWQ6IHRoaXMucGVybWlzc2lvbl9pZH0pXG4gICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbl9pZCA9IG51bGxcbiAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwZXJtaXNzaW9uLWFzc2lnbmVkJywgcmVzcG9uc2UuZGF0YS5wZXJtaXNzaW9uKVxuICAgICAgICAgICB9KVxuICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9hc3NpZ25QZXJtaXNzaW9uRm9ybS52dWUiLCI8dGVtcGxhdGU+XG48ZGl2PlxuICA8ZGl2IDpjbGFzcz1cInsnaGlkZGVuJzogIWZvcm1TaG93bn1cIiBjbGFzcz1cImFic29sdXRlIGNvbnRhaW5lciBteC1hdXRvIHctNS82IG1kOnctMy81IGxnOnctMi81IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnIHotMTBcIiBzdHlsZT1cInRvcDogMjB2aDtsZWZ0OiAwO3JpZ2h0OiAwO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInAtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCIgZm9yPVwiZ3JpZC1maXJzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICBSb2xlc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJyb2xlSWRcIiBjbGFzcz1cInctNS82IGJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JleS1saWdodGVyIGJvcmRlciBib3JkZXItZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgcHktMyBweC00IHByLTggcm91bmRlZFwiIGlkPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIGRpc2FibGVkIGhpZGRlbj5TZWxlY3QgUGVybWlzc2lvbiB0byBBZGQgdG8gUm9sZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJyb2xlIGluIHJvbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cInJvbGUuaWRcIiBjbGFzcz1cIm15LTIgdGV4dC1sZ1wiPnt7IHJvbGUubmFtZSB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidy0xLzYgZmEgZmEtY2hldnJvbi1kb3duIHBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmV5LWRhcmtlciAtbWwtOFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNsb3NlRm9ybVwiIGNsYXNzPVwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImF0dGFjaFBlcm1pc3Npb25cIiBjbGFzcz1cImJnLXRlYWwtbGlnaHQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3ZlcjpiZy10ZWFsLWRhcmsgcHktNCBweC04IHJvdW5kZWRcIj5BdHRhY2g8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBAY2xpY2s9XCJjbG9zZUZvcm1cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6ICFmb3JtU2hvd259XCIgY2xhc3M9XCJoLXNjcmVlbiB3LXNjcmVlbiBmaXhlZCBwaW4gYmctZ3JleS1kYXJrZXN0IG9wYWNpdHktMjVcIj48L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnZm9ybVNob3duJywgJ3Blcm1pc3Npb25JZCddLFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHJvbGVzOiBbXSxcbiAgICByb2xlSWQ6IG51bGxcbiAgfSksXG4gIG1vdW50ZWQgKCkge1xuICAgIGF4aW9zLmdldCgnYWRtaW4vcm9sZXMnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnJvbGVzID0gcmVzcG9uc2UuZGF0YS5yb2xlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuICAgICAgICB9KVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2xvc2VGb3JtICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICB9LFxuICAgIGF0dGFjaFBlcm1pc3Npb24gKCkge1xuICAgICAgYXhpb3MucG9zdCgnL2FkbWluL3JvbGVzLycgKyB0aGlzLnJvbGVJZCArICcvcGVybWlzc2lvbnMnLCB7cGVybWlzc2lvbl9pZDogdGhpcy5wZXJtaXNzaW9uSWR9KVxuICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICB0aGlzLnJvbGVJZCA9IG51bGxcbiAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwZXJtaXNzaW9uLWF0dGFjaGVkJywgcmVzcG9uc2UuZGF0YS5yb2xlKVxuICAgICAgICAgICB9KVxuICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9hdHRhY2hQZXJtaXNzaW9uRm9ybS52dWUiLCI8dGVtcGxhdGU+XG48ZGl2PlxuICA8ZGl2IDpjbGFzcz1cInsnaGlkZGVuJzogIWZvcm1TaG93bn1cIiBjbGFzcz1cImFic29sdXRlIGNvbnRhaW5lciBteC1hdXRvIHctNS82IG1kOnctMy81IGxnOnctMi81IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnIHotMTBcIiBzdHlsZT1cInRvcDogMTJ2aDtsZWZ0OiAwO3JpZ2h0OiAwO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInAtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCIgZm9yPVwiZ3JpZC1maXJzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICBOYW1lIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5IGNhcGl0YWxpemVcIj4ocmVxdWlyZWQpPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cIm5hbWVcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1ncmV5LWxpZ2h0ZXIgcm91bmRlZCBweS0zIHB4LTRcIiBpZD1cImdyaWQtbGFzdC1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5ldyBSb2xlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNsb3NlRm9ybVwiIGNsYXNzPVwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNyZWF0ZVJvbGVcIiBjbGFzcz1cImJnLXRlYWwtbGlnaHQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3ZlcjpiZy10ZWFsLWRhcmsgcHktNCBweC04IHJvdW5kZWRcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBAY2xpY2s9XCJjbG9zZUZvcm1cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6ICFmb3JtU2hvd259XCIgY2xhc3M9XCJoLXNjcmVlbiB3LXNjcmVlbiBmaXhlZCBwaW4gYmctZ3JleS1kYXJrZXN0IG9wYWNpdHktMjVcIj48L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnZm9ybVNob3duJ10sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgbmFtZTogJydcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZUZvcm0gKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgIH0sXG4gICAgY3JlYXRlUm9sZSAoKSB7XG4gICAgICBheGlvcy5wb3N0KCcvYWRtaW4vcm9sZXMnLCB7bmFtZTogdGhpcy5uYW1lfSlcbiAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgdGhpcy5uYW1lID0gJydcbiAgICAgICAgICAgICB0aGlzLiRlbWl0KCdyb2xlLWNyZWF0ZWQnLCByZXNwb25zZS5kYXRhLnJvbGUpXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2NyZWF0ZVJvbGVGb3JtLnZ1ZSIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJtYi00IHRleHQtY2VudGVyXCI+XG4gIDxidXR0b24gQGNsaWNrPVwib3Blbk1vZGFsXCIgY2xhc3M9XCJuby11bmRlcmxpbmUgcC0yIG15LTQgbWItMCBiZy13aGl0ZSB0ZXh0LWJhc2UgdGV4dC10ZWFsIHJvdW5kZWQgc2hhZG93XCI+SW52aXRlIE5ldyBNZW1iZXI8L2J1dHRvbj5cbiAgPGRpdiA6Y2xhc3M9XCJ7J2hpZGRlbic6ICFzaG93SW52aXRlTWVtYmVyRm9ybX1cIj5cbiAgICAgIDxkaXYgQGNsaWNrPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiYWJzb2x1dGUgcGluIG9wYWNpdHktNzUgYmctZ3JleSB6LTEwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQgcGluLXggbWQ6dy0xLzMgei0xMCBiZy1ncmV5LWxpZ2h0ZXIgbXgtMiBtZDpteC1hdXRvIHAtOCByb3VuZGVkXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJweS0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInctZnVsbCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCIgdi1tb2RlbD1cIm5hbWVcIj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJweS0yXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInctZnVsbCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImpvaG5AZXhhbXBsZS5jb21cIiB2LW1vZGVsPVwiZW1haWxcIj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB0LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJ0ZXh0LXJlZC1saWdodCBob3Zlcjpmb250LWJvbGRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzZW5kSW52aXRhdGlvblwiIGNsYXNzPVwiYmctdGVhbC1saWdodCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXRlYWwtZGFyayBweS0zIHB4LTQgcm91bmRlZFwiPlNlbmQgSW52aXRhdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgIHNob3dJbnZpdGVNZW1iZXJGb3JtOiBmYWxzZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJ1xuICAgICAgfSksXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW5Nb2RhbCAoKSB7XG4gICAgICAgICAgdGhpcy5zaG93SW52aXRlTWVtYmVyRm9ybSA9IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNb2RhbCAoKSB7XG4gICAgICAgICAgdGhpcy5zaG93SW52aXRlTWVtYmVyRm9ybSA9IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHNlbmRJbnZpdGF0aW9uICgpIHtcbiAgICAgICAgICBheGlvcy5wb3N0KCcvcmVnaXN0ZXIvaW52aXRlJywge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICBFdmVudEJ1cy4kZW1pdCgnbm90aWZpY2F0aW9uJywgcmVzcG9uc2UuZGF0YS5tZXNzYWdlLCByZXNwb25zZS5kYXRhLnN0YXR1cylcbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gJydcbiAgICAgICAgICAgICAgdGhpcy5lbWFpbCA9ICcnXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ludml0ZU1lbWJlckZvcm0gPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgRXZlbnRCdXMuJGVtaXQoJ25vdGlmaWNhdGlvbicsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgZXJyb3IucmVzcG9uc2UuZGF0YS5zdGF0dXMpXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSAnJ1xuICAgICAgICAgICAgdGhpcy5lbWFpbCA9ICcnXG4gICAgICAgICAgICB0aGlzLnNob3dJbnZpdGVNZW1iZXJGb3JtID0gZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9pbnZpdGVNb2RhbC52dWUiLCI8dGVtcGxhdGU+XG4gIDxuYXYgY2xhc3M9XCJiZy13aGl0ZSBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBoLTEyIHBsLTQgbWQ6cHgtNCBzaGFkb3dcIj5cbiAgICA8YSBjbGFzcz1cInRleHQtdGVhbCB0ZXh0LTJ4bCBuby11bmRlcmxpbmUgc2VsZi1jZW50ZXJcIiA6aHJlZj1cInVybC5zaXRlXCI+XG4gICAgICAgIEdPT0RXT1JLXG4gICAgPC9hPlxuXG4gICAgPGRpdiBjbGFzcz1cIm1kOmZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGJvcmRlci1sIGgtZnVsbFwiPlxuICAgICAgICA8bm90aWZpY2F0aW9uLWRyb3Bkb3duPjwvbm90aWZpY2F0aW9uLWRyb3Bkb3duPlxuICAgICAgICA8cHJvZmlsZS1kcm9wZG93bj48L3Byb2ZpbGUtZHJvcGRvd24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IG5vdGlmaWNhdGlvbkRyb3Bkb3duIGZyb20gXCIuL25vdGlmaWNhdGlvbkRyb3Bkb3duXCI7XG5pbXBvcnQgcHJvZmlsZURyb3Bkb3duIGZyb20gXCIuL3Byb2ZpbGVEcm9wZG93blwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7bm90aWZpY2F0aW9uRHJvcGRvd24sIHByb2ZpbGVEcm9wZG93bn0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgdXNlcjogbmF2YmFyLnVzZXIsXG4gICAgdG9rZW46IExhcmF2ZWwuY3NyZlRva2VuLFxuICAgIHVybDogbmF2YmFyLm5hdlVybCxcbiAgfSlcbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlIiwiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cInB4LTQgc2VsZi1jZW50ZXJcIj5cbiAgICA8ZGl2IGlkPVwibm90aWZpY2F0aW9uXCIgY2xhc3M9XCJ0ZXh0LXRlYWwtbGlnaHQgdGV4dC1iYXNlIG5vLXVuZGVybGluZSBjdXJzb3ItcG9pbnRlclwiIEBjbGljaz1cInRvZ2dsZU5vdGlmaWNhdGlvblwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1iZWxsIGZvbnQtYm9sZCB0ZXh0LXhsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8aSB2LWlmPVwidW5yZWFkTm90aWZpY2F0aW9uXCIgY2xhc3M9XCJmYSBmYS1jaXJjbGUgdGV4dC1yZWQtbGlnaHQgdGV4dC1zbSBhYnNvbHV0ZSBwaW4tdCBtdC0zIG1sLTNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwibm90aWZpY2F0aW9uU2hvd25cIiBjbGFzcz1cImFic29sdXRlIGJnLXdoaXRlIHctNjQgbXQtNSBtci04IHB5LTQgc2hhZG93LWxnIHJvdW5kZWQgei01MFwiIHN0eWxlPVwicmlnaHQ6IDUlO1wiPlxuICAgICAgICA8YSBjbGFzcz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGxpc3QtcmVzZXQgcHgtNCBweS0yIHRleHQtZ3JleS1kYXJrIG5vLXVuZGVybGluZSBibG9ja1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtci0yXCIgOnNyYz1cImdlbmVyYXRlVXJsKHVzZXIuYXZhdGFyKVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHktMSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRlZCBvbiB5b3VyIHBvc3RcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHktMSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDIgbWluIGFnb1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBsaXN0LXJlc2V0IHB4LTQgcHktMiB0ZXh0LWdyZXktZGFyayBuby11bmRlcmxpbmUgYmxvY2tcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMlwiIDpzcmM9XCJnZW5lcmF0ZVVybCh1c2VyLmF2YXRhcilcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB5LTEgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ZWQgb24geW91ciBwb3N0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB5LTEgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAyIG1pbiBhZ29cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgYm9yZGVyLXRcIj48L3NwYW4+XG4gICAgICAgIDxhIGNsYXNzPVwibGlzdC1yZXNldCBweC00IHB0LTIgdGV4dC1ibHVlLWxpZ2h0IHRleHQtY2VudGVyIG5vLXVuZGVybGluZSBibG9ja1wiIGhyZWY9XCIvbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICAgICAgVmlldyBBbGxcbiAgICAgICAgPC9hPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIHVzZXI6IG5hdmJhci51c2VyLFxuICAgIHRva2VuOiBMYXJhdmVsLmNzcmZUb2tlbixcbiAgICB1cmw6IG5hdmJhci5uYXZVcmwsXG4gICAgbm90aWZpY2F0aW9uU2hvd246IGZhbHNlLFxuICAgIHVucmVhZE5vdGlmaWNhdGlvbjogZmFsc2UsXG4gIH0pLFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlTm90aWZpY2F0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25TaG93bikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhpZGVOb3RpZmljYXRpb24pXG4gICAgICAgIHRoaXMuaGlkZU5vdGlmaWNhdGlvbihldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGlkZU5vdGlmaWNhdGlvbilcbiAgICAgICAgdGhpcy5zaG93Tm90aWZpY2F0aW9uKClcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dOb3RpZmljYXRpb24oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnByb2ZpbGVEcm9wZG93blNob3duKSB7XG4gICAgICAgIHRoaXMucHJvZmlsZURyb3Bkb3duU2hvd24gPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5ub3RpZmljYXRpb25TaG93biA9IHRydWVcbiAgICB9LFxuICAgIGhpZGVOb3RpZmljYXRpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgZXZlbnQua2V5ICE9PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5ub3RpZmljYXRpb25TaG93biA9IGZhbHNlXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiW25vdGlmaWNhdGlvblNob3duID8gJycgOiAnaGlkZGVuJywgKG1lc3NhZ2VUeXBlID09PSAnc3VjY2VzcycpID8gJ3RleHQtdGVhbC1saWdodCcgOiAndGV4dC1yZWQnIF1cIiBjbGFzcz1cImZpeGVkIHBpbi10IGJnLXdoaXRlIHRleHQtbGcgcm91bmRlZCBjb250YWluZXIgbXgtYXV0byBtZDp3LTEvMiBtdC0xNiBweS02IHB4LTggc2hhZG93LWxnIHotNTBcIiBzdHlsZT1cImxlZnQ6IDA7IHJpZ2h0OiAwOyBtYXgtd2lkdGg6IDY0MHB4O1wiPlxuICAgICAgICB7e21lc3NhZ2V9fSBcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJjbG9zZU5vdGlmaWNhdGlvblwiIGNsYXNzPVwiaW5saW5lXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXJcIj48L2k+PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvblNob3duOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtZXNzYWdlVHlwZTogJycsXG4gIH0pLFxuICBtZXRob2RzOiB7XG4gICAgY2xvc2VOb3RpZmljYXRpb24gKCkge1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25TaG93biA9IGZhbHNlXG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uIChtZXNzYWdlLCBtZXNzYWdlVHlwZSkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgdGhpcy5tZXNzYWdlVHlwZSA9IG1lc3NhZ2VUeXBlXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblNob3duID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VOb3RpZmljYXRpb24oKVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIEV2ZW50QnVzLiRvbignbm90aWZpY2F0aW9uJywgdGhpcy5zaG93Tm90aWZpY2F0aW9uKVxuICB9LFxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICBFdmVudEJ1cy4kb2ZmKCdub3RpZmljYXRpb24nLCB0aGlzLnNob3dOb3RpZmljYXRpb24pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWUiLCI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwicHgtNCBib3JkZXItbCBmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBwLTRcIj5cbiAgPGRpdiBpZD1cInByb2ZpbGUtZHJvcGRvd25cIiBjbGFzcz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCIgQGNsaWNrPVwidG9nZ2xlUHJvZmlsZURyb3Bkb3duXCI+XG4gICAgPGltZyBjbGFzcz1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbWQ6bXItMlwiIDpzcmM9XCJnZW5lcmF0ZVVybCh1c2VyLmF2YXRhcilcIj5cbiAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1iYXNlIG5vLXVuZGVybGluZSBoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgIHt7IHVzZXIubmFtZSB9fVxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgdi1pZj1cInByb2ZpbGVEcm9wZG93blNob3duXCIgaWQ9XCJwcm9maWxlLW1lbnVcIiBjbGFzcz1cImFic29sdXRlIGJnLXdoaXRlIHctNDggcGluLXIgbXItMiBweS0xIHNoYWRvdy1sZyByb3VuZGVkIHotNTBcIiBzdHlsZT1cInRvcDozLjVyZW07XCI+XG4gICAgPGEgY2xhc3M9XCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSB0ZXh0LWdyZXktZGFyayBibG9jayBmb250LW1lZGl1bVwiIDpocmVmPVwicHJvZmlsZVVybFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ3LTYgaW5saW5lLWJsb2NrXCI+PGkgY2xhc3M9XCJwci0xIGZhIGZhLXVzZXJcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIFlvdXIgcHJvZmlsZVxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIgaHJlZj1cIi9hZG1pblwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ3LTYgaW5saW5lLWJsb2NrXCI+PGkgY2xhc3M9XCJwci0xIGZhcyBmYS1zaGllbGQtYWx0IGZvbnQtcmVndWxhclwiPjwvaT48L3NwYW4+XG4gICAgICBBZG1pblxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIgaHJlZj1cIiNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidy02IGlubGluZS1ibG9ja1wiPjxpIGNsYXNzPVwicHItMSBmYSBmYS1jb2cgZm9udC1yZWd1bGFyXCI+PC9pPjwvc3Bhbj5cbiAgICAgIFNldHRpbmdzXG4gICAgPC9hPlxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgYm9yZGVyLXRcIj48L3NwYW4+XG4gICAgPGEgY2xhc3M9XCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtZ3JleS1kYXJrIGZvbnQtbWVkaXVtIG5vLXVuZGVybGluZSBibG9ja1wiIDpocmVmPVwidXJsLmxvZ291dFwiIEBjbGljaz1cImxvZ291dFVzZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidy02IGlubGluZS1ibG9ja1wiPjxpIGNsYXNzPVwicHItMSBmYXMgZmEtc2lnbi1vdXQtYWx0IGZvbnQtcmVndWxhclwiPjwvaT48L3NwYW4+XG4gICAgICBMb2dvdXRcbiAgICA8L2E+XG4gIDwvZGl2PiAgICAgICAgICAgIFxuICA8Zm9ybSBpZD1cImxvZ291dC1mb3JtXCIgOmFjdGlvbj1cInVybC5sb2dvdXRcIiBtZXRob2Q9XCJQT1NUXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgOnZhbHVlPVwidG9rZW5cIj5cbiAgPC9mb3JtPlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIHVzZXI6IG5hdmJhci51c2VyLFxuICAgIHRva2VuOiBMYXJhdmVsLmNzcmZUb2tlbixcbiAgICB1cmw6IG5hdmJhci5uYXZVcmwsXG4gICAgYXZhdGFyOiBcIlwiLFxuICAgIHByb2ZpbGVVcmw6IG5hdmJhci5uYXZVcmwuc2l0ZSArIFwiL3VzZXJzL1wiICsgbmF2YmFyLnVzZXIudXNlcm5hbWUsXG4gICAgcHJvZmlsZURyb3Bkb3duU2hvd246IGZhbHNlXG4gIH0pLFxuICBtZXRob2RzOiB7XG4gICAgbG9nb3V0VXNlcihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXQtZm9ybVwiKS5zdWJtaXQoKVxuICAgIH0sXG4gICAgdG9nZ2xlUHJvZmlsZURyb3Bkb3duKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9maWxlRHJvcGRvd25TaG93bikge1xuICAgICAgICB0aGlzLmhpZGVQcm9maWxlRHJvcGRvd24oZXZlbnQpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGlkZVByb2ZpbGVEcm9wZG93bilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd1Byb2ZpbGVEcm9wZG93bigpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGlkZVByb2ZpbGVEcm9wZG93bilcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dQcm9maWxlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvblNob3duKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2hvd24gPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5wcm9maWxlRHJvcGRvd25TaG93biA9IHRydWVcbiAgICB9LFxuICAgIGhpZGVQcm9maWxlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgZXZlbnQua2V5ICE9PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5wcm9maWxlRHJvcGRvd25TaG93biA9IGZhbHNlXG4gICAgfVxuICB9LFxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWUiLCJ2YXIgYXN5bmNHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF3YWl0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWUpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcInRocm93XCIsIGFyZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICAgIGlmIChmcm9udCkge1xuICAgICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICAgIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJldHVybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHdyYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBhd2FpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgQ29ubmVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbm5lY3RvcihvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3Rvcik7XG5cbiAgICAgICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhdXRoOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRoRW5kcG9pbnQ6ICcvYnJvYWRjYXN0aW5nL2F1dGgnLFxuICAgICAgICAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuICAgICAgICAgICAgY3NyZlRva2VuOiBudWxsLFxuICAgICAgICAgICAgaG9zdDogbnVsbCxcbiAgICAgICAgICAgIGtleTogbnVsbCxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogJ0FwcC5FdmVudHMnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdzZXRPcHRpb25zJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHModGhpcy5fZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3NyZlRva2VuKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXV0aC5oZWFkZXJzWydYLUNTUkYtVE9LRU4nXSA9IHRoaXMuY3NyZlRva2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3NyZlRva2VuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNzcmZUb2tlbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3dbJ0xhcmF2ZWwnXSAmJiB3aW5kb3dbJ0xhcmF2ZWwnXS5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jc3JmVG9rZW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgKHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDb25uZWN0b3I7XG59KCk7XG5cbnZhciBDaGFubmVsID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKENoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ25vdGlmaWNhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLklsbHVtaW5hdGVcXFxcTm90aWZpY2F0aW9uc1xcXFxFdmVudHNcXFxcQnJvYWRjYXN0Tm90aWZpY2F0aW9uQ3JlYXRlZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuRm9yV2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDaGFubmVsO1xufSgpO1xuXG52YXIgRXZlbnRGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRGb3JtYXR0ZXIobmFtZXNwYWNlKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50Rm9ybWF0dGVyKTtcblxuICAgICAgICB0aGlzLnNldE5hbWVzcGFjZShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKEV2ZW50Rm9ybWF0dGVyLCBbe1xuICAgICAgICBrZXk6ICdmb3JtYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0KGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY2hhckF0KDApID09PSAnLicgfHwgZXZlbnQuY2hhckF0KDApID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQuc3Vic3RyKDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0gdGhpcy5uYW1lc3BhY2UgKyAnLicgKyBldmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBldmVudC5yZXBsYWNlKC9cXC4vZywgJ1xcXFwnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0TmFtZXNwYWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldE5hbWVzcGFjZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRXZlbnRGb3JtYXR0ZXI7XG59KCk7XG5cbnZhciBQdXNoZXJDaGFubmVsID0gZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyQ2hhbm5lbChwdXNoZXIsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlckNoYW5uZWwpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlckNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucHVzaGVyLnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5iaW5kKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5iaW5kKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbnZhciBQdXNoZXJQcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlclByaXZhdGVDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJpdmF0ZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJQcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlclByaXZhdGVDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICd3aGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoJ2NsaWVudC0nICsgZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJQcml2YXRlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbnZhciBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlclByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlclByZXNlbmNlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soT2JqZWN0LmtleXMoZGF0YS5tZW1iZXJzKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubWVtYmVyc1trXTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwdXNoZXI6bWVtYmVyX3JlbW92ZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuY2hhbm5lbHNbdGhpcy5uYW1lXS50cmlnZ2VyKCdjbGllbnQtJyArIGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyUHJlc2VuY2VDaGFubmVsO1xufShQdXNoZXJDaGFubmVsKTtcblxudmFyIFNvY2tldElvQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFNvY2tldElvQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9DaGFubmVsKHNvY2tldCwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0NoYW5uZWwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50cyA9IHt9O1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgX3RoaXMuY29uZmlndXJlUmVjb25uZWN0b3IoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCd1bnN1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgYXV0aDogdGhpcy5vcHRpb25zLmF1dGggfHwge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbih0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5uYW1lID09IGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29uZmlndXJlUmVjb25uZWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29uZmlndXJlUmVjb25uZWN0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoJ3JlY29ubmVjdCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd1bmJpbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5ldmVudHNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNC5zb2NrZXQucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXM0LmV2ZW50c1tldmVudF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9DaGFubmVsO1xufShDaGFubmVsKTtcblxudmFyIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1NvY2tldElvQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwsIF9Tb2NrZXRJb0NoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTb2NrZXRJb1ByaXZhdGVDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2NsaWVudCBldmVudCcsIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjbGllbnQtJyArIGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsO1xufShTb2NrZXRJb0NoYW5uZWwpO1xuXG52YXIgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1NvY2tldElvUHJpdmF0ZUNoYW5uKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwsIF9Tb2NrZXRJb1ByaXZhdGVDaGFubik7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdoZXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3ByZXNlbmNlOnN1YnNjcmliZWQnLCBmdW5jdGlvbiAobWVtYmVycykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lbWJlcnMubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnVzZXJfaW5mbztcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmpvaW5pbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lbWJlci51c2VyX2luZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpsZWF2aW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvUHJlc2VuY2VDaGFubmVsO1xufShTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxudmFyIFB1c2hlckNvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlckNvbm5lY3RvcigpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ29ubmVjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBQdXNoZXJDb25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJDb25uZWN0b3IpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIodGhpcy5vcHRpb25zLmtleSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFB1c2hlckNoYW5uZWwodGhpcy5wdXNoZXIsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlc2VuY2VDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlckNvbm5lY3Rvcjtcbn0oQ29ubmVjdG9yKTtcblxudmFyIFNvY2tldElvQ29ubmVjdG9yID0gZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb0Nvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb0Nvbm5lY3RvcigpIHtcbiAgICAgICAgdmFyIF9yZWY7XG5cbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9Db25uZWN0b3IpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFNvY2tldElvQ29ubmVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9Db25uZWN0b3IpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9Db25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHZhciBpbyA9IHRoaXMuZ2V0U29ja2V0SU8oKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gaW8odGhpcy5vcHRpb25zLmhvc3QsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb2NrZXQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNvY2tldElPJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvY2tldElPKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsaWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ja2V0LmlvIGNsaWVudCBub3QgZm91bmQuIFNob3VsZCBiZSBnbG9iYWxseSBhdmFpbGFibGUgb3IgcGFzc2VkIHZpYSBvcHRpb25zLmNsaWVudCcpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKG5hbWUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKS5saXN0ZW4oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgU29ja2V0SW9DaGFubmVsKHRoaXMuc29ja2V0LCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGVDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSA9IG5ldyBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKHRoaXMuc29ja2V0LCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlc2VuY2VDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByZXNlbmNlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUobmFtZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IFtuYW1lLCAncHJpdmF0ZS0nICsgbmFtZSwgJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgICAgICAgIGNoYW5uZWxzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvY2tldC5pZDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb0Nvbm5lY3Rvcjtcbn0oQ29ubmVjdG9yKTtcblxudmFyIEVjaG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRWNobyhvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEVjaG8pO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmICh0eXBlb2YgVnVlID09PSAnZnVuY3Rpb24nICYmIFZ1ZS5odHRwKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyVnVlUmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBheGlvcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdwdXNoZXInKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBQdXNoZXJDb25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ3NvY2tldC5pbycpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFNvY2tldElvQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhFY2hvLCBbe1xuICAgICAgICBrZXk6ICdyZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIFZ1ZS5odHRwLmludGVyY2VwdG9ycy5wdXNoKGZ1bmN0aW9uIChyZXF1ZXN0LCBuZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLnNldCgnWC1Tb2NrZXQtSUQnLCBfdGhpcy5zb2NrZXRJZCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVyc1snWC1Tb2NrZXQtSWQnXSA9IF90aGlzMi5zb2NrZXRJZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyalF1ZXJ5QWpheFNldHVwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5LmFqYXggIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuYWpheFNldHVwKHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gYmVmb3JlU2VuZCh4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczMuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVNvY2tldC1JZCcsIF90aGlzMy5zb2NrZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwoX2NoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5jaGFubmVsKF9jaGFubmVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJpdmF0ZShjaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJpdmF0ZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbihjaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShjaGFubmVsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5sZWF2ZShjaGFubmVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc29ja2V0SWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3Iuc29ja2V0SWQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBFY2hvO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVjaG87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1lY2hvL2Rpc3QvZWNoby5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1lY2hvL2Rpc3QvZWNoby5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDcgOCA5IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IDggOSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInB4LTQgYm9yZGVyLWwgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcC00XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwicHJvZmlsZS1kcm9wZG93blwiIH0sXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVQcm9maWxlRHJvcGRvd24gfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtZDptci0yXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5nZW5lcmF0ZVVybChfdm0udXNlci5hdmF0YXIpIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwidGV4dC1ncmV5LWRhcmtlciB0ZXh0LWJhc2Ugbm8tdW5kZXJsaW5lIGhpZGRlbiBtZDpibG9ja1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0udXNlci5uYW1lKSArIFwiXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWFuZ2xlLWRvd25cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnByb2ZpbGVEcm9wZG93blNob3duXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImFic29sdXRlIGJnLXdoaXRlIHctNDggcGluLXIgbXItMiBweS0xIHNoYWRvdy1sZyByb3VuZGVkIHotNTBcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgdG9wOiBcIjMuNXJlbVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInByb2ZpbGUtbWVudVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIHRleHQtZ3JleS1kYXJrIGJsb2NrIGZvbnQtbWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0ucHJvZmlsZVVybCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl9tKDApLCBfdm0uX3YoXCJcXG4gICAgICAgICAgWW91ciBwcm9maWxlXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIGJvcmRlci10XCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0udXJsLmxvZ291dCB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dvdXRVc2VyIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX20oMyksIF92bS5fdihcIlxcbiAgICAgIExvZ291dFxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJsb2dvdXQtZm9ybVwiLCBhY3Rpb246IF92bS51cmwubG9nb3V0LCBtZXRob2Q6IFwiUE9TVFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50b2tlbiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidy02IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTEgZmEgZmEtdXNlclwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImFcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtZ3JleS1kYXJrIGZvbnQtbWVkaXVtIG5vLXVuZGVybGluZSBibG9ja1wiLFxuICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pblwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctNiBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicHItMSBmYXMgZmEtc2hpZWxkLWFsdCBmb250LXJlZ3VsYXJcIiB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQWRtaW5cXG4gICAgXCIpXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIsXG4gICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctNiBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicHItMSBmYSBmYS1jb2cgZm9udC1yZWd1bGFyXCIgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIFNldHRpbmdzXFxuICAgIFwiKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidy02IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTEgZmFzIGZhLXNpZ24tb3V0LWFsdCBmb250LXJlZ3VsYXJcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA1NDU2ZjE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wNTQ1NmYxOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTA1NDU2ZjE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImFic29sdXRlIGNvbnRhaW5lciBteC1hdXRvIHctNS82IG1kOnctMy81IGxnOnctMi81IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnIHotMTBcIixcbiAgICAgICAgY2xhc3M6IHsgaGlkZGVuOiAhX3ZtLmZvcm1TaG93biB9LFxuICAgICAgICBzdGF0aWNTdHlsZTogeyB0b3A6IFwiMjB2aFwiLCBsZWZ0OiBcIjBcIiwgcmlnaHQ6IFwiMFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiZ3JpZC1maXJzdC1uYW1lXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgUm9sZXNcXG4gICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yb2xlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb2xlSWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidy01LzYgYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgYm9yZGVyIGJvcmRlci1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBweS0zIHB4LTQgcHItOCByb3VuZGVkXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ1c2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb2xlSWQgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzZWxlY3RlZDogXCJcIiwgZGlzYWJsZWQ6IFwiXCIsIGhpZGRlbjogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxlY3QgUGVybWlzc2lvbiB0byBBZGQgdG8gUm9sZVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yb2xlcywgZnVuY3Rpb24ocm9sZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXktMiB0ZXh0LWxnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByb2xlLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyb2xlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInctMS82IGZhIGZhLWNoZXZyb24tZG93biBwb2ludGVyLWV2ZW50cy1ub25lIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JleS1kYXJrZXIgLW1sLThcIlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlRm9ybSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJnLXRlYWwtbGlnaHQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3ZlcjpiZy10ZWFsLWRhcmsgcHktNCBweC04IHJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmF0dGFjaFBlcm1pc3Npb24gfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQXR0YWNoXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoLXNjcmVlbiB3LXNjcmVlbiBmaXhlZCBwaW4gYmctZ3JleS1kYXJrZXN0IG9wYWNpdHktMjVcIixcbiAgICAgIGNsYXNzOiB7IGhpZGRlbjogIV92bS5mb3JtU2hvd24gfSxcbiAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VGb3JtIH1cbiAgICB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xMWZiZjYwZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTFmYmY2MGZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXR0YWNoUGVybWlzc2lvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTExZmJmNjBmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2F0dGFjaFBlcm1pc3Npb25Gb3JtLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiYWJzb2x1dGUgY29udGFpbmVyIG14LWF1dG8gdy01LzYgbWQ6dy0zLzUgbGc6dy0yLzUgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGcgei0xMFwiLFxuICAgICAgICBjbGFzczogeyBoaWRkZW46ICFfdm0uZm9ybVNob3duIH0sXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IHRvcDogXCIxMnZoXCIsIGxlZnQ6IFwiMFwiLCByaWdodDogXCIwXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1ncmV5LWxpZ2h0ZXIgcm91bmRlZCBweS0zIHB4LTRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJncmlkLWxhc3QtbmFtZVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk5ldyBSb2xlXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB5LTQgcHgtOCBiZy1ncmV5LWxpZ2h0ZXIgcm91bmRlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXJlZC1saWdodGVyIGhvdmVyOmZvbnQtYm9sZCBob3Zlcjp0ZXh0LXJlZC1saWdodFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VGb3JtIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctdGVhbC1saWdodCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXRlYWwtZGFyayBweS00IHB4LTggcm91bmRlZFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlUm9sZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDcmVhdGVcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImgtc2NyZWVuIHctc2NyZWVuIGZpeGVkIHBpbiBiZy1ncmV5LWRhcmtlc3Qgb3BhY2l0eS0yNVwiLFxuICAgICAgY2xhc3M6IHsgaGlkZGVuOiAhX3ZtLmZvcm1TaG93biB9LFxuICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZUZvcm0gfVxuICAgIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwibGFiZWxcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIixcbiAgICAgICAgYXR0cnM6IHsgZm9yOiBcImdyaWQtZmlyc3QtbmFtZVwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIE5hbWUgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXkgY2FwaXRhbGl6ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCIocmVxdWlyZWQpXCIpXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xMzBiZDYyNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTMwYmQ2MjZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvY3JlYXRlUm9sZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTEzMGJkNjI2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2NyZWF0ZVJvbGVGb3JtLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiYWJzb2x1dGUgY29udGFpbmVyIG14LWF1dG8gdy01LzYgbWQ6dy0zLzUgbGc6dy0yLzUgYmctd2hpdGUgcm91bmRlZCBzaGFkb3ctbGcgei0xMFwiLFxuICAgICAgICBjbGFzczogeyBoaWRkZW46ICFfdm0uZm9ybVNob3duIH0sXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IHRvcDogXCIyMHZoXCIsIGxlZnQ6IFwiMFwiLCByaWdodDogXCIwXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJncmlkLWZpcnN0LW5hbWVcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uc1xcbiAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBlcm1pc3Npb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJtaXNzaW9uX2lkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInctNS82IGJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JleS1saWdodGVyIGJvcmRlciBib3JkZXItZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgcHktMyBweC00IHByLTggcm91bmRlZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXNlclwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucGVybWlzc2lvbl9pZCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNlbGVjdGVkOiBcIlwiLCBkaXNhYmxlZDogXCJcIiwgaGlkZGVuOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGVjdCBQZXJtaXNzaW9uIHRvIEFkZCB0byBSb2xlXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBlcm1pc3Npb25zLCBmdW5jdGlvbihwZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteS0yIHRleHQtbGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHBlcm1pc3Npb24uaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHBlcm1pc3Npb24ubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwidy0xLzYgZmEgZmEtY2hldnJvbi1kb3duIHBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmV5LWRhcmtlciAtbWwtOFwiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB5LTQgcHgtOCBiZy1ncmV5LWxpZ2h0ZXIgcm91bmRlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXJlZC1saWdodGVyIGhvdmVyOmZvbnQtYm9sZCBob3Zlcjp0ZXh0LXJlZC1saWdodFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VGb3JtIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctdGVhbC1saWdodCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXRlYWwtZGFyayBweS00IHB4LTggcm91bmRlZFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYXNzaWduUGVybWlzc2lvbiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJBc3NpZ25cIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImgtc2NyZWVuIHctc2NyZWVuIGZpeGVkIHBpbiBiZy1ncmV5LWRhcmtlc3Qgb3BhY2l0eS0yNVwiLFxuICAgICAgY2xhc3M6IHsgaGlkZGVuOiAhX3ZtLmZvcm1TaG93biB9LFxuICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZUZvcm0gfVxuICAgIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTE2OTFmMjM5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNjkxZjIzOVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9hc3NpZ25QZXJtaXNzaW9uRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMTY5MWYyMzlcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXNzaWduUGVybWlzc2lvbkZvcm0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbXgtMiBtZDpteC1hdXRvXCIsXG4gICAgICBjbGFzczogeyBoaWRkZW46IF92bS5hY3RpdmVUYWIgIT0gXCJhY3Rpdml0eVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmV5LWRhcmtlciB0ZXh0LWxnIG1iLTRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkZpbHRlcnNcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cgZmxleC13cmFwIHRleHQtZ3JleS1kYXJrZXN0IC1tbC00IG1iLThcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJteC00IHB5LTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGl2aXR5LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWN0aXZpdHlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidy1mdWxsIGJsb2NrIGFwcGVhcmFuY2Utbm9uZSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyZXkgcm91bmRlZCB0ZXh0LWdyZXktZGFya2VyIHB5LTMgcHgtNCBwci04XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZpdHkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJhY3Rpdml0eVwiLCBkaXNhYmxlZDogXCJcIiwgaGlkZGVuOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkZpbHRlciBieSBBY3Rpdml0eVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXktMiB0ZXh0LWxnXCIsIGRvbVByb3BzOiB7IHZhbHVlOiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIm5hbWVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmYSBmYS1jaGV2cm9uLWRvd24gcG9pbnRlci1ldmVudHMtbm9uZSBpdGVtcy1jZW50ZXIgdGV4dC1ncmV5LWRhcmsgYWJzb2x1dGUgcGluLXIgbXItM1wiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXgtNCBweS00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ3LWZ1bGwgYmxvY2sgYXBwZWFyYW5jZS1ub25lIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JleSByb3VuZGVkIHRleHQtZ3JleS1kYXJrZXIgcHktMyBweC00IHByLThcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwidXNlclwiLCBkaXNhYmxlZDogXCJcIiwgaGlkZGVuOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkZpbHRlciBieSBVc2VyXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJteS0yIHRleHQtbGdcIiwgZG9tUHJvcHM6IHsgdmFsdWU6IDIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwibmFtZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInctMS82IGZhIGZhLWNoZXZyb24tZG93biBwb2ludGVyLWV2ZW50cy1ub25lIGl0ZW1zLWNlbnRlciB0ZXh0LWdyZXktZGFyayBhYnNvbHV0ZSBwaW4tciBtci0zXCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJteC00IHB5LTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInctZnVsbCBibG9jayBhcHBlYXJhbmNlLW5vbmUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmV5IHJvdW5kZWQgdGV4dC1ncmV5LWRhcmtlciBweS0zIHB4LTQgcHItOFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGUgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJkYXRlXCIsIGRpc2FibGVkOiBcIlwiLCBoaWRkZW46IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmlsdGVyIGJ5IERhdGVcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm15LTIgdGV4dC1sZ1wiLCBkb21Qcm9wczogeyB2YWx1ZTogMyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJuYW1lXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwidy0xLzYgZmEgZmEtY2hldnJvbi1kb3duIHBvaW50ZXItZXZlbnRzLW5vbmUgaXRlbXMtY2VudGVyIHRleHQtZ3JleS1kYXJrIGFic29sdXRlIHBpbi1yIG1yLTNcIlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm14LTQgcHktNFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJnLXRlYWwtbGlnaHQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3ZlcjpiZy10ZWFsLWRhcmsgcHktMyBweC04IHJvdW5kZWRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgID8gW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIiB9KV1cbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQXBwbHlcXG4gICAgXCIpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5hY3Rpdml0aWVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIGJvcmRlciBwLTMgdGV4dC1ncmV5LWRhcmsgaW5saW5lLWZsZXggcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhrZXkpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKHZhbHVlLCBmdW5jdGlvbihhY3Rpdml0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgtMTYgYm9yZGVyLWwgbWwtMiBtZDptbC02IC1teS00XCJcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHB4LTQgbWQ6bXItNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFjdGl2aXR5LnRpbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4LWdyb3cgYmctd2hpdGUgYm9yZGVyIHB4LTQgbWQ6cHgtOCBweS00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYmx1ZSBmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlciBuby11bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvdXNlcnMvXCIgKyBhY3Rpdml0eS5jYXVzZXIudXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGFjdGl2aXR5LmNhdXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoYWN0aXZpdHkuZGVzY3JpcHRpb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGFjdGl2aXR5LnN1YmplY3RfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eS5zdWJqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWJsdWUgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXIgbm8tdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LnN1YmplY3RfdHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkuc3ViamVjdF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoYWN0aXZpdHkuc3ViamVjdC5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaC04IGJvcmRlci1sIG1sLTIgbWQ6bWwtNlwiIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoLTE2IGJvcmRlci1sIGJvcmRlci1ncmV5LWxpZ2h0ZXIgLW10LTggbWwtMiBtZDptbC02XCJcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImJvcmRlci1sIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1sLTIgbWQ6bWwtNiBzZWxmLXN0cmV0Y2hcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJyb3VuZGVkLWZ1bGwgYmctZ3JleS1saWdodGVyIGJvcmRlciBib3JkZXItcGluayBwLTEgLW1sLTIgbWQ6bXItNFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWZ1bGwgYmctcGluayBwLTFcIiB9KV1cbiAgICAgICAgKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG10LTE2IG1iLThcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtMyBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdyB0ZXh0LXRlYWwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIExvYWQgTW9yZVxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI0YWI5NGUwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yNGFiOTRlMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9hY3Rpdml0eUJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0yNGFiOTRlMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9hY3Rpdml0eUJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiZml4ZWQgcGluLXQgYmctd2hpdGUgdGV4dC1sZyByb3VuZGVkIGNvbnRhaW5lciBteC1hdXRvIG1kOnctMS8yIG10LTE2IHB5LTYgcHgtOCBzaGFkb3ctbGcgei01MFwiLFxuICAgICAgY2xhc3M6IFtcbiAgICAgICAgX3ZtLm5vdGlmaWNhdGlvblNob3duID8gXCJcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIF92bS5tZXNzYWdlVHlwZSA9PT0gXCJzdWNjZXNzXCIgPyBcInRleHQtdGVhbC1saWdodFwiIDogXCJ0ZXh0LXJlZFwiXG4gICAgICBdLFxuICAgICAgc3RhdGljU3R5bGU6IHsgbGVmdDogXCIwXCIsIHJpZ2h0OiBcIjBcIiwgXCJtYXgtd2lkdGhcIjogXCI2NDBweFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0ubWVzc2FnZSkgKyBcIiBcXG4gICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5saW5lXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VOb3RpZmljYXRpb24gfSB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzIGZsb2F0LXJpZ2h0IGN1cnNvci1wb2ludGVyXCIgfSldXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTNjZDdmZTFiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zY2Q3ZmUxYlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtM2NkN2ZlMWJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiYmctd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaC0xMiBwbC00IG1kOnB4LTQgc2hhZG93XCJcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtdGVhbCB0ZXh0LTJ4bCBuby11bmRlcmxpbmUgc2VsZi1jZW50ZXJcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0udXJsLnNpdGUgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgR09PRFdPUktcXG4gIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZDpmbGV4XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBib3JkZXItbCBoLWZ1bGxcIiB9LFxuICAgICAgICAgIFtfYyhcIm5vdGlmaWNhdGlvbi1kcm9wZG93blwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJwcm9maWxlLWRyb3Bkb3duXCIpXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ2YzhmYjM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NmM4ZmIzNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTQ2YzhmYjM0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1iLThcIiwgY2xhc3M6IHsgaGlkZGVuOiBfdm0uYWN0aXZlVGFiICE9IFwiYWJvdXRcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogeyBoaWRkZW46ICFfdm0uc2hvd1VwZGF0ZU1vZGFsIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWJzb2x1dGUgcGluIG9wYWNpdHktNzUgYmctZ3JleVwiLFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VVcGRhdGVNb2RhbCB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZpeGVkIHBpbi14IHctMS8zIHotMTAgYmctZ3JleS1saWdodGVyIG14LWF1dG8gcC04IHJvdW5kZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMlwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCJcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBwdC04IGJnLWdyZXktbGlnaHRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXJlZC1saWdodGVyIGhvdmVyOmZvbnQtYm9sZCBob3Zlcjp0ZXh0LXJlZC1saWdodCBob3Zlcjpib3JkZXItcmVkLWxpZ2h0IGJvcmRlci1yZWQtbGlnaHRlciBib3JkZXIgcHgtNCBweS0zIHJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZVVwZGF0ZU1vZGFsIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT2tcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJjb250YWluZXIgbXgtNCBtZDpteC1hdXRvIHB5LTggYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgdGV4dC1jZW50ZXIgdGV4dC1ncmV5LWRhcmtlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBiLTQgdGV4dC0zeGxcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBHb29kd29ya1xcbiAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC0yXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgVmVyc2lvbjogXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGwtMiB0ZXh0LXhsIHRleHQtZ3JleS1kYXJrZXN0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS52ZXJzaW9uKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcIm5vLXVuZGVybGluZSBwLTQgbS00IG1iLTAgYmctd2hpdGUgdGV4dC1iYXNlIHRleHQtdGVhbCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JleS1saWdodFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2hlY2tGb3JVcGRhdGVzIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgQ2hlY2sgZm9yIFVwZGF0ZXNcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlubGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBMYXN0IFVwZGF0ZWQ6IFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBsLTIgdGV4dC14bCB0ZXh0LWdyZXktZGFya2VzdFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGFzdFVwZGF0ZWQpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHQtOFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIMKpIFwiICsgX3ZtLl9zKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSkgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhsIHRleHQtYmx1ZS1saWdodCBuby11bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbHVtaW5hci9cIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJJbHVtaW5hclwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtMlwiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICAgIEF1dGhvcjogXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGwtMiB0ZXh0LXhsIHRleHQtYmx1ZS1saWdodCBuby11bmRlcmxpbmVcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vaGFzbmF5ZWVuLmdpdGh1Yi5pby9cIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJOZWhhbCBIYXNuYXllZW5cIildXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTJcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgICBTdWJtaXQgaXNzdWUgJiBmZWVkYmFjayBhdDogXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGwtMiB0ZXh0LXhsIHRleHQtYmx1ZS1saWdodCBuby11bmRlcmxpbmVcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbHVtaW5hci9nb29kd29yay9pc3N1ZXNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJHb29kd29yayBJc3N1ZXNcIildXG4gICAgICApXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNGIxNmY4YTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRiMTZmOGEwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2Fib3V0Qm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTRiMTZmOGEwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2Fib3V0Qm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiLCBjbGFzczogeyBoaWRkZW46IF92bS5hY3RpdmVUYWIgIT0gXCJ1c2Vyc1wiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImludml0ZS1tb2RhbFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZDpiZy13aGl0ZSBtZDpyb3VuZGVkIG1kOnNoYWRvdyB0ZXh0LWdyZXktZGFya2VzdFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHRleHQtM3hsIG1kOnAtNCB0ZXh0LWdyZXktZGFya2VyXCIgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBbGwgVXNlcnNcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciB0ZXh0LWxlZnQgbS00IG1kOm0tMCBtZDpwLTQgYmctdGVhbC1saWdodGVyIG1kOmJnLXdoaXRlIHJvdW5kZWQgbWQ6cm91bmRlZC1ub25lIHNoYWRvdyBtZDpzaGFkb3ctbm9uZSByZWxhdGl2ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS80IG1kOnctMS82IHB4LTIgbWQ6cHgtMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5nZW5lcmF0ZVVybCh1c2VyLmF2YXRhcikgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJ3LTMvNCBtZDp3LTUvNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpweC0wIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQ6dy0xLzUgdGV4dC1sZWZ0IHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyZXktZGFya2VyIHAtMiBtZDpwLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQ6dy0yLzUgZmxleCBmbGV4LXJvdyB0ZXh0LXNtIHAtMiBtZDpweC0wIGJnLWdyZXktbGlnaHRlc3QgbWQ6Ymctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvMiB0ZXh0LWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkBcIiArIF92bS5fcyh1c2VyLnVzZXJuYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMS8yIHRleHQtcmlnaHQgbWQ6dGV4dC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5yb2xlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kOnctMi81IGZsZXggZmxleC1yb3cgdGV4dC1zbSBwLTIgbWQ6cHgtMCBiZy1ncmV5LWxpZ2h0ZXN0IG1kOmJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHVzZXIudGltZXpvbmUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJoaWRkZW4gbWQ6ZmxleCBmbGV4LXJvdyB0ZXh0LWxlZnQgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrIHAtNFwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS82XCIgfSwgW192bS5fdihcIkF2YXRhclwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS82XCIgfSwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNlwiIH0sIFtfdm0uX3YoXCJVc2VybmFtZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS82XCIgfSwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNlwiIH0sIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS82XCIgfSwgW192bS5fdihcIlRpbWV6b25lXCIpXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJhYnNvbHV0ZSBwaW4tdCBwaW4tciBtLTIgdGV4dC1ncmV5LWRhcmtlciBoLWZ1bGwgbWQ6ZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWQ6bS0wIG1kOm1yLTRcIlxuICAgICAgfSxcbiAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZWxsaXBzaXMtaCBjdXJzb3ItcG9pbnRlclwiIH0pXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTY5M2IzOTVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU2OTNiMzk1XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3VzZXJzQm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTU2OTNiMzk1XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3VzZXJzQm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtYi04XCIsIGNsYXNzOiB7IGhpZGRlbjogX3ZtLmFjdGl2ZVRhYiAhPSBcImF1dGhcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmctd2hpdGUgc2hhZG93IHJvdW5kZWQtdCB0ZXh0LWdyZXktZGFya2VzdCBtdC00XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyB0ZXh0LWNlbnRlciB0ZXh0LWdyZXlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMS8yIGZvbnQtc2VtaWJvbGQgcC00IHJvdW5kZWQtdGxcIixcbiAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZUNvbHVtbiA9PT0gXCJyb2xlc1wiXG4gICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWluZGlnbyBib3JkZXItaW5kaWdvIGJvcmRlci1iLTJcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctd2hpdGUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2YXRlVGhpc0NvbHVtbihcInJvbGVzXCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBSb2xlc1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEvMiBmb250LXNlbWlib2xkIHAtNFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlQ29sdW1uID09PSBcInBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtaW5kaWdvIGJvcmRlci1pbmRpZ28gYm9yZGVyLWItMlwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZhdGVUaGlzQ29sdW1uKFwicGVybWlzc2lvbnNcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFBlcm1pc3Npb25zXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJyb2xlcy1ib2FyZFwiLCB7IGF0dHJzOiB7IGFjdGl2ZUNvbHVtbjogX3ZtLmFjdGl2ZUNvbHVtbiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwZXJtaXNzaW9ucy1ib2FyZFwiLCB7IGF0dHJzOiB7IGFjdGl2ZUNvbHVtbjogX3ZtLmFjdGl2ZUNvbHVtbiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWY2YzAwZDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVmNmMwMGQyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2F1dGhCb2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNWY2YzAwZDJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vYXV0aEJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiY29udGFpbmVyIG1kOm14LWF1dG8gbWQ6cHgtNCBtZDpteS02IHctZnVsbCBtZDp3LW1kIGxnOnctbGcgeGw6dy14bCB4eGw6dy0yeGwgYm9yZGVyLXQgbWQ6Ym9yZGVyLTBcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbWQ6anVzdGlmeS1hcm91bmQgbWQ6bXktNiBweS0yIG1kOnB5LTQgYmctd2hpdGUgc2hhZG93IG1kOnJvdW5kZWQgdGV4dC1ncmV5XCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID09PSBcInVzZXJzXCJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXRlYWwtZGFyayBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTIgcGItMiBtZDpwYi00IC1tYi0yIG1kOi1tYi00XCJcbiAgICAgICAgICAgICAgICAgIDogXCJjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgdy0xLzJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZVRoaXNUYWIoXCJ1c2Vyc1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVzZXJzIHRleHQteGwgbWQ6dGV4dC0yeGxcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC14cyBmb250LXJlZ3VsYXIgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJVc2Vyc1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9PT0gXCJhdXRoXCJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXRlYWwtZGFyayBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTIgcGItMiBtZDpwYi00IC1tYi0yIG1kOi1tYi00XCJcbiAgICAgICAgICAgICAgICAgIDogXCJjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgdy0xLzJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZVRoaXNUYWIoXCJhdXRoXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9jay1vcGVuIHRleHQteGwgbWQ6dGV4dC0yeGxcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC14cyBmb250LXJlZ3VsYXIgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJSb2xlcyAmIFBlcm1pc3Npb25zXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID09PSBcImFjdGl2aXR5XCJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXRlYWwtZGFyayBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTIgcGItMiBtZDpwYi00IC1tYi0yIG1kOi1tYi00XCJcbiAgICAgICAgICAgICAgICAgIDogXCJjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgdy0xLzJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZVRoaXNUYWIoXCJhY3Rpdml0eVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWJvbHQgdGV4dC14bCBtZDp0ZXh0LTJ4bFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LXhzIGZvbnQtcmVndWxhciBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFjdGl2aXRpZXNcIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPT09IFwiYWJvdXRcIlxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtdGVhbC1kYXJrIGZvbnQtc2VtaWJvbGQgYm9yZGVyLXRlYWwgYm9yZGVyLWItMiBwYi00IC1tYi0yIG1kOi1tYi00XCJcbiAgICAgICAgICAgICAgICAgIDogXCJjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgdy0xLzJcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZVRoaXNUYWIoXCJhYm91dFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtaW5mby1jaXJjbGUgdGV4dC14bCBtZDp0ZXh0LTJ4bFwiXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LXhzIGZvbnQtcmVndWxhciBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFib3V0XCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktc3RhcnQgbXQtNFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInVzZXJzQm9hcmRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdXNlcnM6IF92bS51c2VycywgYWN0aXZlVGFiOiBfdm0uYWN0aXZlIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYXV0aEJvYXJkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHVzZXJzOiBfdm0udXNlcnMsIGFjdGl2ZVRhYjogX3ZtLmFjdGl2ZSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFjdGl2aXR5Qm9hcmRcIiwgeyBhdHRyczogeyBhY3RpdmVUYWI6IF92bS5hY3RpdmUgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYWJvdXRCb2FyZFwiLCB7IGF0dHJzOiB7IGFjdGl2ZVRhYjogX3ZtLmFjdGl2ZSB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjdmYzVjY2JcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY3ZmM1Y2NiXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02N2ZjNWNjYlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTQgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcIm5vLXVuZGVybGluZSBwLTIgbXktNCBtYi0wIGJnLXdoaXRlIHRleHQtYmFzZSB0ZXh0LXRlYWwgcm91bmRlZCBzaGFkb3dcIixcbiAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuTW9kYWwgfVxuICAgICAgfSxcbiAgICAgIFtfdm0uX3YoXCJJbnZpdGUgTmV3IE1lbWJlclwiKV1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBjbGFzczogeyBoaWRkZW46ICFfdm0uc2hvd0ludml0ZU1lbWJlckZvcm0gfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFic29sdXRlIHBpbiBvcGFjaXR5LTc1IGJnLWdyZXkgei0xMFwiLFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlTW9kYWwgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZml4ZWQgcGluLXggbWQ6dy0xLzMgei0xMCBiZy1ncmV5LWxpZ2h0ZXIgbXgtMiBtZDpteC1hdXRvIHAtOCByb3VuZGVkXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwidy1mdWxsIHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkpvaG4gRG9lXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInctZnVsbCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqb2huQGV4YW1wbGUuY29tXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHQtOCBiZy1ncmV5LWxpZ2h0ZXIgcm91bmRlZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmVkLWxpZ2h0IGhvdmVyOmZvbnQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZU1vZGFsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiYmctdGVhbC1saWdodCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXRlYWwtZGFyayBweS0zIHB4LTQgcm91bmRlZFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zZW5kSW52aXRhdGlvbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VuZCBJbnZpdGF0aW9uXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2I3NGM0YmVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdiNzRjNGJlXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2ludml0ZU1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03Yjc0YzRiZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9pbnZpdGVNb2RhbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJnLXdoaXRlIHJvdW5kZWQtYlwiLFxuICAgICAgY2xhc3M6IHsgaGlkZGVuOiBfdm0uYWN0aXZlQ29sdW1uICE9PSBcInJvbGVzXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJjcmVhdGUtcm9sZS1mb3JtXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgXCJmb3JtLXNob3duXCI6IF92bS5jcmVhdGVSb2xlRm9ybVNob3duIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xvc2U6IF92bS5jbG9zZUNyZWF0ZVJvbGVGb3JtLFxuICAgICAgICAgIFwicm9sZS1jcmVhdGVkXCI6IF92bS5uZXdSb2xlQ3JlYXRlZFxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFzc2lnbi1wZXJtaXNzaW9uLWZvcm1cIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHJvbGVJZDogX3ZtLnJvbGVJZCxcbiAgICAgICAgICBcImZvcm0tc2hvd25cIjogX3ZtLmFzc2lnblBlcm1pc3Npb25Gb3JtU2hvd25cbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbG9zZTogX3ZtLmNsb3NlQXNzaWduUGVybWlzc2lvbkZvcm0sXG4gICAgICAgICAgXCJwZXJtaXNzaW9uLWFzc2lnbmVkXCI6IF92bS5wZXJtaXNzaW9uQXNzaWduZWRcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJteC00IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcIm5vLXVuZGVybGluZSBwLTMgbS04IC1tYi00IHRleHQtd2hpdGUgdGV4dC1iYXNlIGJnLXRlYWwtbGlnaHQgcm91bmRlZCBzaGFkb3cteGxcIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2hvd0NyZWF0ZVJvbGVGb3JtIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJBZGQgTmV3IFJvbGVcIildXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInB4LTYgcHktOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyZXktZGFya2VyXCJcbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5yb2xlcywgZnVuY3Rpb24ocm9sZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiZy13aGl0ZSBzaGFkb3cteGwgdy04MCBteS00IG1kOm0tNiByb3VuZGVkLWxnXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJwLTQgdGV4dC14bCB1cHBlcmNhc2UgdGV4dC1pbmRpZ28gYmctZ3JleS1saWdodGVyIHJvdW5kZWQtdC1sZyBmbGV4IGZsZXgtcm93XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3Mocm9sZS5uYW1lKSArIFwiXFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVJvbGUocm9sZS5pZCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZS5kZWxldGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWwtMSBwbC0xIGZhcyBmYS10cmFzaC1hbHQgY3Vyc29yLXBvaW50ZXIgdGV4dC1iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJweC00IHBiLTIgYmctZ3JleS1saWdodGVyIHRleHQtc20gZmxleCBmbGV4LXJvd1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlxcbiAgICAgICAgICBQZXJtaXNzaW9uc1xcbiAgICAgICAgXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0Fzc2lnblBlcm1pc3Npb25Gb3JtKHJvbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1sLTIgZmFzIGZhLXBsdXMtY2lyY2xlIHRleHQtaW5kaWdvIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICByb2xlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cgZmxleC13cmFwIG0tMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChyb2xlLnBlcm1pc3Npb25zLCBmdW5jdGlvbihwZXJtaXNzaW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHktMSBweC0yIG0tMiByb3VuZGVkLWZ1bGwgZm9udC1tZWRpdW0gYmctcGluayB0ZXh0LXdoaXRlIHRleHQtc20gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwZXJtaXNzaW9uLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmV2b2tlUGVybWlzc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWwtMSBwbC0xIGZhcyBmYS10cmFzaC1hbHQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInB5LTEgcHgtMiBtLTIgZm9udC1tZWRpdW0gdGV4dC1ncmV5LWRhcmtlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIERvbid0IGhhdmUgYW55IHBlcm1pc3Npb24geWV0XFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1jNWE2YTMwMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYzVhNmEzMDBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vcm9sZXNCb2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtYzVhNmEzMDBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vcm9sZXNCb2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJnLXdoaXRlIHJvdW5kZWQtYlwiLFxuICAgICAgY2xhc3M6IHsgaGlkZGVuOiBfdm0uYWN0aXZlQ29sdW1uICE9PSBcInBlcm1pc3Npb25zXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJhdHRhY2gtcGVybWlzc2lvbi1mb3JtXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBwZXJtaXNzaW9uSWQ6IF92bS5wZXJtaXNzaW9uSWQsXG4gICAgICAgICAgXCJmb3JtLXNob3duXCI6IF92bS5hdHRhY2hQZXJtaXNzaW9uRm9ybVNob3duXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xvc2U6IF92bS5jbG9zZUF0dGFjaFBlcm1pc3Npb25Gb3JtLFxuICAgICAgICAgIFwicGVybWlzc2lvbi1hdHRhY2hlZFwiOiBfdm0ucGVybWlzc2lvbkF0dGFjaGVkVG9Sb2xlXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcIiBweC02IHB5LTggZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdGV4dC1ncmV5LWRhcmtlclwiXG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0ucGVybWlzc2lvbnMsIGZ1bmN0aW9uKHBlcm1pc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiZy13aGl0ZSBzaGFkb3cteGwgdy04MCBteS00IG1kOm0tNiByb3VuZGVkLWxnXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJwLTQgdGV4dC14bCB1cHBlcmNhc2UgdGV4dC1pbmRpZ28gYmctZ3JleS1saWdodGVyIHJvdW5kZWQtdC1sZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhwZXJtaXNzaW9uLm5hbWUpICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHgtNCBwYi0yIGJnLWdyZXktbGlnaHRlciB0ZXh0LXNtIGZsZXggZmxleC1yb3dcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgUm9sZXNcXG4gICAgICAgIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dBdHRhY2hQZXJtaXNzaW9uRm9ybShwZXJtaXNzaW9uLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtbC0yIGZhcyBmYS1wbHVzLWNpcmNsZSB0ZXh0LWluZGlnbyBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgcGVybWlzc2lvbi5yb2xlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBtLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2wocGVybWlzc2lvbi5yb2xlcywgZnVuY3Rpb24ocm9sZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHktMSBweC0yIG0tMiByb3VuZGVkLWZ1bGwgZm9udC1tZWRpdW0gYmctcGluayB0ZXh0LXdoaXRlIHRleHQtc20gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFwiICsgX3ZtLl9zKHJvbGUubmFtZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1sLTEgcGwtMSBmYXMgZmEtdHJhc2gtYWx0IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInB5LTEgcHgtMiBtLTIgZm9udC1tZWRpdW0gdGV4dC1ncmV5LWRhcmtlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIERvbid0IGJlbG9uZ3MgdG8gYW55IHJvbGUgeWV0XFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1jNzhjMjU0ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYzc4YzI1NGVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vcGVybWlzc2lvbnNCb2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtYzc4YzI1NGVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vcGVybWlzc2lvbnNCb2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB4LTQgc2VsZi1jZW50ZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXRlYWwtbGlnaHQgdGV4dC1iYXNlIG5vLXVuZGVybGluZSBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJub3RpZmljYXRpb25cIiB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZU5vdGlmaWNhdGlvbiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhciBmYS1iZWxsIGZvbnQtYm9sZCB0ZXh0LXhsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0udW5yZWFkTm90aWZpY2F0aW9uXG4gICAgICAgICAgPyBfYyhcImlcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImZhIGZhLWNpcmNsZSB0ZXh0LXJlZC1saWdodCB0ZXh0LXNtIGFic29sdXRlIHBpbi10IG10LTMgbWwtM1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ubm90aWZpY2F0aW9uU2hvd25cbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBiZy13aGl0ZSB3LTY0IG10LTUgbXItOCBweS00IHNoYWRvdy1sZyByb3VuZGVkIHotNTBcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHJpZ2h0OiBcIjUlXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGxpc3QtcmVzZXQgcHgtNCBweS0yIHRleHQtZ3JleS1kYXJrIG5vLXVuZGVybGluZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZ2VuZXJhdGVVcmwoX3ZtLnVzZXIuYXZhdGFyKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGlzdC1yZXNldCBweC00IHB5LTIgdGV4dC1ncmV5LWRhcmsgbm8tdW5kZXJsaW5lIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtci0yXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5nZW5lcmF0ZVVybChfdm0udXNlci5hdmF0YXIpIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIGJvcmRlci10XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImxpc3QtcmVzZXQgcHgtNCBwdC0yIHRleHQtYmx1ZS1saWdodCB0ZXh0LWNlbnRlciBuby11bmRlcmxpbmUgYmxvY2tcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9ub3RpZmljYXRpb25zXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgVmlldyBBbGxcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMSB0ZXh0LXNtXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRlZCBvbiB5b3VyIHBvc3RcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTEgdGV4dC14c1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAyIG1pbiBhZ29cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMSB0ZXh0LXNtXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRlZCBvbiB5b3VyIHBvc3RcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTEgdGV4dC14c1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAyIG1pbiBhZ29cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWU1YWY5YzFjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1lNWFmOWMxY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtZTVhZjljMWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyIsImltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKVxuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbndpbmRvdy5sdXhvbiA9IHJlcXVpcmUoJ2x1eG9uJylcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAnWC1DU1JGLVRPS0VOJzogd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuLFxuICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbn1cblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbmlmICh0eXBlb2YgaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuICAgIGJyb2FkY2FzdGVyOiAnc29ja2V0LmlvJyxcbiAgICBob3N0OiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjYwMDEnXG4gIH0pXG59XG5cbndpbmRvdy5WdWUubWl4aW4oe1xuICBtZXRob2RzOiB7XG4gICAgZ2VuZXJhdGVVcmw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy9pbWFnZS9hdmF0YXIuanBnJ1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy8nICsgdmFsdWVcbiAgICB9XG4gIH1cbn0pXG5cbndpbmRvdy5FdmVudEJ1cyA9IG5ldyBWdWUoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYWJvdXRCb2FyZC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRiMTZmOGEwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXRCb2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2Fib3V0Qm9hcmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRiMTZmOGEwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGIxNmY4YTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9hYm91dEJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vYWJvdXRCb2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2FjdGl2aXR5Qm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yNGFiOTRlMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2FjdGl2aXR5Qm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9hY3Rpdml0eUJvYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNGFiOTRlMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI0YWI5NGUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vYWN0aXZpdHlCb2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2FjdGl2aXR5Qm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hdXRoQm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZjZjMDBkMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2F1dGhCb2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2F1dGhCb2FyZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWY2YzAwZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZjZjMDBkMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2F1dGhCb2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2F1dGhCb2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjdmYzVjY2JcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL2luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02N2ZjNWNjYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY3ZmM1Y2NiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9pbmRleC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Blcm1pc3Npb25zQm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1jNzhjMjU0ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Blcm1pc3Npb25zQm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9wZXJtaXNzaW9uc0JvYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1jNzhjMjU0ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWM3OGMyNTRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vcGVybWlzc2lvbnNCb2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3Blcm1pc3Npb25zQm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9yb2xlc0JvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYzVhNmEzMDBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yb2xlc0JvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vcm9sZXNCb2FyZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYzVhNmEzMDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1jNWE2YTMwMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3JvbGVzQm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi9yb2xlc0JvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNlcnNCb2FyZC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU2OTNiMzk1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdXNlcnNCb2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FkbWluL3VzZXJzQm9hcmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU2OTNiMzk1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTY5M2IzOTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hZG1pbi91c2Vyc0JvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWRtaW4vdXNlcnNCb2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fzc2lnblBlcm1pc3Npb25Gb3JtLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTY5MWYyMzlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hc3NpZ25QZXJtaXNzaW9uRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2Fzc2lnblBlcm1pc3Npb25Gb3JtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNjkxZjIzOVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE2OTFmMjM5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXNzaWduUGVybWlzc2lvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9hc3NpZ25QZXJtaXNzaW9uRm9ybS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2F0dGFjaFBlcm1pc3Npb25Gb3JtLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTFmYmY2MGZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hdHRhY2hQZXJtaXNzaW9uRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2F0dGFjaFBlcm1pc3Npb25Gb3JtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMWZiZjYwZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTExZmJmNjBmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvYXR0YWNoUGVybWlzc2lvbkZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9hdHRhY2hQZXJtaXNzaW9uRm9ybS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NyZWF0ZVJvbGVGb3JtLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTMwYmQ2MjZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jcmVhdGVSb2xlRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm1zL2NyZWF0ZVJvbGVGb3JtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMzBiZDYyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTEzMGJkNjI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybXMvY3JlYXRlUm9sZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy9jcmVhdGVSb2xlRm9ybS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ludml0ZU1vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2I3NGM0YmVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnZpdGVNb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2ludml0ZU1vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03Yjc0YzRiZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiNzRjNGJlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvaW52aXRlTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9pbnZpdGVNb2RhbC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25hdmJhci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ2YzhmYjM0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmF2YmFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NmM4ZmIzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ2YzhmYjM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1lNWFmOWMxY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWU1YWY5YzFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTVhZjljMWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbm90aWZpY2F0aW9uUG9wdXAudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zY2Q3ZmUxYlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vdGlmaWNhdGlvblBvcHVwLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNjZDdmZTFiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2NkN2ZlMWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Byb2ZpbGVEcm9wZG93bi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA1NDU2ZjE4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcHJvZmlsZURyb3Bkb3duLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZmlsZURyb3Bkb3duLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNTQ1NmYxOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA1NDU2ZjE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZmlsZURyb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZmlsZURyb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDciLCJpbXBvcnQgJy4vLi4vLi4vYm9vdHN0cmFwJ1xuaW1wb3J0IGluZGV4IGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9pbmRleC52dWUnXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlJ1xuaW1wb3J0IG5vdGlmaWNhdGlvblBvcHVwIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWUnXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIGluZGV4LCBuYXZiYXIsIG5vdGlmaWNhdGlvblBvcHVwXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==