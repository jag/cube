db.boards.drop();

["random", "collectd_df", "collectd_load", "collectd_interface", "collectd_memory"].forEach(function(type) {
  db[type + "_events"].drop();
  db[type + "_metrics"].drop();
});
