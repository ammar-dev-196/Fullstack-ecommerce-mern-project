import crypto from "crypto";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, "uploads");
  },
  filename: function (request, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, file.fieldname + "-" + raw.toString("hex"));
    });
  },
});

export const upload = multer({
  storage: storage,
});
