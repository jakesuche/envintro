<template>
  <aside
    class="sidebar-left border-right bg-white shadow"
    id="leftSidebar"
    data-simplebar
  >
    <a
      href="#"
      class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
      data-toggle="toggle"
    >
      <i class="fe fe-x"><span class="sr-only"></span></i>
    </a>
    <nav class="vertnav navbar navbar-light">
      <!-- nav bar -->
      <div class="w-100 mb-4 d-flex">
        <a
          class="navbar-brand mx-auto mt-2 flex-fill text-center"
          href="./index.html"
        >
          <svg
            version="1.1"
            id="logo"
            class="navbar-brand-img brand-sm"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 120 120"
            xml:space="preserve"
          >
            <g>
              <polygon class="st0" points="78,105 15,105 24,87 87,87 	" />
              <polygon class="st0" points="96,69 33,69 42,51 105,51 	" />
              <polygon class="st0" points="78,33 15,33 24,15 87,15 	" />
            </g>
          </svg>
        </a>
      </div>
      <ul class="navbar-nav flex-fill w-100 mb-2">
        <li class="nav-item dropdown">
          <a
            href="#dashboard"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-home fe-16"></i>
            <span class="ml-3 item-text">Dashboard</span
            ><span class="sr-only">(current)</span>
          </a>
          <ul class="collapse list-unstyled pl-4 w-100" id="dashboard">
            <li class="nav-item active">
              <a class="nav-link pl-3" href="./index.html"
                ><span class="ml-1 item-text">Default</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./dashboard-analytics.html"
                ><span class="ml-1 item-text">Analytics</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./dashboard-sales.html"
                ><span class="ml-1 item-text">E-commerce</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./dashboard-saas.html"
                ><span class="ml-1 item-text">Saas Dashboard</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./dashboard-system.html"
                ><span class="ml-1 item-text">Systems</span></a
              >
            </li>
          </ul>
        </li>
      </ul>
      <p class="text-muted nav-heading mt-4 mb-1">
        <span>Sale Area</span>
      </p>
      <ul class="navbar-nav flex-fill w-100 mb-2">
        <li class="nav-item dropdown">
          <a
            href="#ui-elements"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-box fe-16"></i>
            <span class="ml-3 item-text">Items</span>
          </a>
          <ul class="collapse list-unstyled pl-4 w-100" id="ui-elements">
            <li class="nav-item">
              <a class="nav-link pl-3" href="./ui-color.html"
                ><span class="ml-1 item-text">Items Goups</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./ui-typograpy.html"
                ><span class="ml-1 item-text">Items</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./ui-icons.html"
                ><span class="ml-1 item-text">Price List</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./ui-buttons.html"
                ><span class="ml-1 item-text">Inventory adjustments</span></a
              >
            </li>
       
          </ul>
        </li>
        <li class="nav-item w-100">
          <router-link :to="{name:'Customer'}">
            <i class="fe fe-layers fe-16"></i>
             <span class="ml-3 item-text">Customer</span>
            <span class="badge badge-pill badge-primary">New</span>
         </router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            href="#forms"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-credit-card fe-16"></i>
            <span class="ml-3 item-text">Sales Orders</span>
          </a>
        
        </li>
        <li class="nav-item dropdown">
          <a
            href="#tables"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-grid fe-16"></i>
            <span class="ml-3 item-text">Packages</span>
          </a>
         
        </li>
        <li class="nav-item dropdown">
          <a
            href="#charts"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-pie-chart fe-16"></i>
            <span class="ml-3 item-text">Invoices</span>
          </a>
        
        </li>
         <li class="nav-item dropdown">
          <a
            href="#charts"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-pie-chart fe-16"></i>
            <span class="ml-3 item-text">Payments Recieved</span>
          </a>
       
        </li>
         <li class="nav-item dropdown">
          <a
            href="#charts"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-pie-chart fe-16"></i>
            <span class="ml-3 item-text">Returns</span>
          </a>
          <ul class="collapse list-unstyled pl-4 w-100" id="charts">
            <li class="nav-item">
              <a class="nav-link pl-3" href="./chart-inline.html"
                ><span class="ml-1 item-text">Sales Returns</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link pl-3" href="./chart-chartjs.html"
                ><span class="ml-1 item-text">Credit Notes</span></a
              >
            </li>
           
          </ul>
        </li>
      </ul>
      <p class="text-muted nav-heading mt-4 mb-1">
        <span>Utility</span>
      </p>
      <ul class="navbar-nav flex-fill w-100 mb-2">
        <li class="nav-item w-100">
          <a class="nav-link" href="calendar.html">
            <i class="fe fe-calendar fe-16"></i>
            <span class="ml-3 item-text">Calendar</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            href="#contact"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-book fe-16"></i>
            <span class="ml-3 item-text">Vendors</span>
          </a>
         
        </li>
        <li class="nav-item dropdown">
          <a
            href="#profile"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-user fe-16"></i>
            <span class="ml-3 item-text">Purchase Orders</span>
          </a>
        
        </li>
        <li class="nav-item dropdown">
          <a
            href="#fileman"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-folder fe-16"></i>
            <span class="ml-3 item-text">Bills</span>
          </a>
         
        </li>
        <li class="nav-item dropdown">
          <a
            href="#support"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-compass fe-16"></i>
            <span class="ml-3 item-text">Payments Made</span>
          </a>
          
        </li>
      </ul>
      <p class="text-muted nav-heading mt-4 mb-1">
        <span>Extra</span>
      </p>
      <ul class="navbar-nav flex-fill w-100 mb-2">
        <li class="nav-item dropdown">
          <a
            href="#pages"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-file fe-16"></i>
            <span class="ml-3 item-text">Integrations</span>
          </a>
         
        </li>
        <li class="nav-item dropdown">
          <a
            href="#auth"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-shield fe-16"></i>
            <span class="ml-3 item-text">Reports</span>
          </a>
          
        </li>
        <li class="nav-item dropdown">
          <a
            href="#layouts"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-layout fe-16"></i>
            <span class="ml-3 item-text">Documents</span>
          </a>
        
        </li>
      </ul>
      <p class="text-muted nav-heading mt-4 mb-1">
        <span>Documentation</span>
      </p>
      <ul class="navbar-nav flex-fill w-100 mb-2">
        <li class="nav-item w-100">
          <a class="nav-link" href="../docs/index.html">
            <i class="fe fe-help-circle fe-16"></i>
            <span class="ml-3 item-text">Getting Start</span>
          </a>
        </li>
      </ul>
      <div class="btn-box w-100 mt-4 mb-1">
        <a
          href="https://themeforest.net/item/tinydash-bootstrap-html-admin-dashboard-template/27511269"
          target="_blank"
          class="btn mb-2 btn-primary btn-lg btn-block"
        >
          <i class="fe fe-shopping-cart fe-12 mx-2"></i
          ><span class="small">Buy now</span>
        </a>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {};
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
