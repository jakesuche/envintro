<template>
  <main role="main" class="main-content">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-xl-10">
          <div class="row align-items-center my-4">
            <div class="col">
              <h2 class="h3 mb-0 page-title">New Customer</h2>
            </div>
            <div class="col-auto">
              <button type="button" class="btn btn-primary">Save Change</button>
            </div>
          </div>
          <form>
            <hr class="my-4" />
            <h5 class="mb-2 mt-4">Customer type</h5>

            <div class="form-row">
              <div class="custom-control form-group col-md-6 custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck2"
                />
                <label class="custom-control-label" for="customCheck2"
                  >Individual</label
                >
              </div>
              <div class="custom-control form-group col-md-6 custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label class="custom-control-label" for="customCheck1"
                  >business</label
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="firstname">Salutaion</label>
                <select id="inputState5" class="form-control">
                  <option value="female">Mr.</option>
                  <option value="male">Mrs.</option>
                   <option value="male">Ms.</option>
                    <option value="male">Dr.</option>
                    <option value="male">Prof.</option>

                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="firstname">Firstname</label>
                <input type="text" id="firstname" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="lastname">Lastname</label>
                <input type="text" id="lastname" class="form-control" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-8">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputPhone">Phone</label>
                <input type="text" class="form-control" id="inputPhone" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="custom-placeholder">Date of Birth</label>
                <input
                  class="form-control input-placeholder"
                  id="custom-placeholder"
                  type="text"
                  name="placeholder"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState5">Gender</label>
                <select id="inputState5" class="form-control">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputLang">Language</label>
                <select id="inputLang" class="form-control">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
            <hr class="my-4" />
            <h5 class="mb-2 mt-4">Company</h5>
            <p class="mb-4">
              Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus
            </p>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstname">Company Name</label>
                <input type="text" id="firstname" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="lastname">Department</label>
                <input type="text" id="lastname" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress5">Address</label>
              <input type="text" class="form-control" id="inputAddress5" />
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="custom-zip">Zip code</label>
                <input class="form-control input-zip" id="custom-zip" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState5">Country</label>
                <select id="inputState5" class="form-control">
                  <option valye="">Select country...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState5">State</label>
                <select id="inputState5" class="form-control">
                  <option selected="">Choose state...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <hr class="my-4" />
            <div class="form-group">
                <div class="col-md-12">
                  <div class="">
                    <div class="">
                      <ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Other Details</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Address</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                        </li>
                      </ul>
                      <div class="tab-content mb-1" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> 
                           
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstname">Currency*</label>
                <input type="text" id="firstname" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="lastname">Payment Terms</label>
                <input type="text" id="lastname" class="form-control" />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="custom-zip">Twitter</label>
                <input class="form-control input-zip" id="custom-zip" />
              </div>
              <div class="form-group col-md-6">
                <label for="inputState5">Facebook</label>
                <input class="form-control input-zip" id="custom-zip" />
              </div>
              
            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"> 
                            <div class="row">
                                 <div class="col-md-6 mb-4">
                                     
                                     <p> BILLING ADDRESS</p>
                                    <div class="form-group mb-3">
                                        <label for="attention">Attention</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="country">Country / Region</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Address </label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">City</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">State</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Zip Code</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Phone</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Fax</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                    
                               
                                </div> <!-- /.col -->
                                <div class="col-md-6 mb-4">
                                     
                                     <p> SHIPPING ADDRESS</p>
                                    <div class="form-group mb-3">
                                        <label for="attention">Attention</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="country">Country / Region</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Address </label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">City</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">State</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Zip Code</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Phone</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                     <div class="form-group mb-3">
                                        <label for="country">Fax</label>
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                    
                               
                                </div> <!-- /.col -->

                            </div>
                         </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"> chooo  </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <hr class="my-4" />
            <div class="form-row">
              <div class="col-md-6">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customPass"
                    checked
                  />
                  <label class="custom-control-label" for="customPass"
                    >Create account and email generated password</label
                  >
                </div>
              </div>
              <div class="col-md-6 text-right">
                <button type="button" class="btn btn-primary">
                  Save Change
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- .col-12 -->
      </div>
      <!-- .row -->
    </div>
    <!-- .container-fluid -->
    <div
      class="modal fade modal-notif modal-slide"
      tabindex="-1"
      role="dialog"
      aria-labelledby="defaultModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="defaultModalLabel">Notifications</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="list-group list-group-flush my-n3">
              <div class="list-group-item bg-transparent">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="fe fe-box fe-24"></span>
                  </div>
                  <div class="col">
                    <small
                      ><strong>Package has uploaded successfull</strong></small
                    >
                    <div class="my-0 text-muted small">
                      Package is zipped and uploaded
                    </div>
                    <small class="badge badge-pill badge-light text-muted"
                      >1m ago</small
                    >
                  </div>
                </div>
              </div>
              <div class="list-group-item bg-transparent">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="fe fe-download fe-24"></span>
                  </div>
                  <div class="col">
                    <small
                      ><strong>Widgets are updated successfull</strong></small
                    >
                    <div class="my-0 text-muted small">
                      Just create new layout Index, form, table
                    </div>
                    <small class="badge badge-pill badge-light text-muted"
                      >2m ago</small
                    >
                  </div>
                </div>
              </div>
              <div class="list-group-item bg-transparent">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="fe fe-inbox fe-24"></span>
                  </div>
                  <div class="col">
                    <small><strong>Notifications have been sent</strong></small>
                    <div class="my-0 text-muted small">
                      Fusce dapibus, tellus ac cursus commodo
                    </div>
                    <small class="badge badge-pill badge-light text-muted"
                      >30m ago</small
                    >
                  </div>
                </div>
                <!-- / .row -->
              </div>
              <div class="list-group-item bg-transparent">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <span class="fe fe-link fe-24"></span>
                  </div>
                  <div class="col">
                    <small><strong>Link was attached to menu</strong></small>
                    <div class="my-0 text-muted small">
                      New layout has been attached to the menu
                    </div>
                    <small class="badge badge-pill badge-light text-muted"
                      >1h ago</small
                    >
                  </div>
                </div>
              </div>
              <!-- / .row -->
            </div>
            <!-- / .list-group -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-block"
              data-dismiss="modal"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade modal-shortcut modal-slide"
      tabindex="-1"
      role="dialog"
      aria-labelledby="defaultModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="defaultModalLabel">Shortcuts</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body px-5">
            <div class="row align-items-center">
              <div class="col-6 text-center">
                <div class="squircle bg-success justify-content-center">
                  <i class="fe fe-cpu fe-32 align-self-center text-white"></i>
                </div>
                <p>Control area</p>
              </div>
              <div class="col-6 text-center">
                <div class="squircle bg-primary justify-content-center">
                  <i
                    class="fe fe-activity fe-32 align-self-center text-white"
                  ></i>
                </div>
                <p>Activity</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-6 text-center">
                <div class="squircle bg-primary justify-content-center">
                  <i
                    class="fe fe-droplet fe-32 align-self-center text-white"
                  ></i>
                </div>
                <p>Droplet</p>
              </div>
              <div class="col-6 text-center">
                <div class="squircle bg-primary justify-content-center">
                  <i
                    class="fe fe-upload-cloud fe-32 align-self-center text-white"
                  ></i>
                </div>
                <p>Upload</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-6 text-center">
                <div class="squircle bg-primary justify-content-center">
                  <i class="fe fe-users fe-32 align-self-center text-white"></i>
                </div>
                <p>Users</p>
              </div>
              <div class="col-6 text-center">
                <div class="squircle bg-primary justify-content-center">
                  <i
                    class="fe fe-settings fe-32 align-self-center text-white"
                  ></i>
                </div>
                <p>Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
