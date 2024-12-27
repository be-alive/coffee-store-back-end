exports.success = (res, data) => {
  return res.status(200).json({
    message: "عملیات با موفقیت انجام شد",
    data: data,
  });
};

exports.created = (res, data) => {
  return res.status(201).json({
    message: "آیتم با موفقیت ساخته شد",
    data: data,
  });
};

exports.deleted = (res, data) => {
  return res.status(200).json({
    message: "آیتم با موفقیت حذف شد",
    data: data,
  });
};

exports.found = (res, data) => {
  return res.status(200).json({
    message: "آیتم با موفقیت پیدا شد",
    data: data,
  });
};

exports.failed = (res, msg) => {
  return res.status(500).json({
    message: "عملیات با موفقیت انجام نشد",
    errorMsg: msg,
  });
};

exports.notFound = (res) => {
  return res.status(404).json({
    message: "اطلاعات پیدا نشد",
  });
};

exports.validation = (res, data) => {
  return res.status(422).json({
    message: "اطلاعات نامعتبر است",
    data: data,
  });
};

exports.unauthorized = (res) => {
  return res.status(401).json({
    message: "سطح دسترسی معتبر نیست",
  });
};

exports.notAuth = (res, msg = "Authentication failed") => {
  return res.status(401).json({
    message: "ابتدا وارد شوید",
    errorMsg: msg,
  });
};
