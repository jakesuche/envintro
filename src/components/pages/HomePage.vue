<template>
  <body class="vertical  light  ">
    <div class="wrapper">
      <nav class="topnav navbar navbar-light" v-if="(this.$route.path =='/login')? false: true">
        <button
          type="button"
          class="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar"
        >
          <i class="fe fe-menu navbar-toggler-icon"></i>
        </button>
        <form class="form-inline mr-auto searchform text-muted">
          <input
            class="form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted"
            type="search"
            placeholder="Type something..."
            aria-label="Search"
          />
        </form>
        <ul class="nav">
          <li class="nav-item">
            <a
              class="nav-link text-muted my-2"
              href="#"
              id="modeSwitcher"
              data-mode="light"
            >
              <i class="fe fe-sun fe-16"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-muted my-2"
              href="./#"
              data-toggle="modal"
              data-target=".modal-shortcut"
            >
              <span class="fe fe-grid fe-16"></span>
            </a>
          </li>
          <li class="nav-item nav-notif">
            <a
              class="nav-link text-muted my-2"
              href="./#"
              data-toggle="modal"
              data-target=".modal-notif"
            >
              <span class="fe fe-bell fe-16"></span>
              <span class="dot dot-md bg-success"></span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-muted pr-0"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="avatar avatar-sm mt-2">
                <!-- <img src="./assets/avatars/face-1.jpg" alt="..." class="avatar-img rounded-circle"> -->
              </span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Settings</a>
              <a class="dropdown-item" href="#">Activities</a>
            </div>
          </li>
        </ul>
      </nav>
      <!-- aside -->
      <SideBar  v-if="(this.$route.path =='/login')? false: true"/>
      <!-- side bar  -->

      <!-- main -->

    <!-- router-view -->
      <router-view />
      <!-- ////////////////////// -->
    </div>
    <!-- .wrapper -->
  </body>
</template>

<script>
import SideBar from "@/components/shared/SideBar";
export default {
    data(){
        return {
            hide:''
        }
    },
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.vertical .topnav,
.vertical.hover .topnav,
.narrow.open .topnav {
  margin-top: -7px;
}

/* for side  bar */
.vertnav {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  top: 50px;
}
</style>

<style scoped src="@/assets/css/feather.css"></style>
<style scoped src="@/assets/css/app-light.css"></style>
<style scoped src="@/assets/css/simplebar.css"></style>
<style scoped src="@/assets/css/quill.snow.css"></style>
<style scoped src="@/assets/css/jquery.steps.css"></style>
<style scoped src="@/assets/css/uppy.min.css"></style>
<style scoped src="@/assets/css/select2.css"></style>
