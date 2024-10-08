import { envsafe, str, bool } from "envsafe";

export const env = envsafe({
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str(),
  BACKUP_DATABASE_HOST: str({
    desc: "The host of the database to backup.",
  }),
  BACKUP_DATABASE_PORT: str({
    desc: "The port of the database to backup.",
  }),
  BACKUP_DATABASE_NAME: str({
    desc: "The name of the database to backup.",
  }),
  BACKUP_DATABASE_USERNAME: str({
    desc: "The username of the database to backup.",
  }),
  BACKUP_DATABASE_PASSWORD: str({
    desc: "The password of the database to backup.",
    default: "3306",
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: "The cron schedule to run the backup on.",
    default: "0 5 * * *",
    allowEmpty: true,
  }),
  AWS_S3_ENDPOINT: str({
    desc: "The S3 custom endpoint you want to use.",
    default: "",
    allowEmpty: true,
  }),
  AWS_S3_FORCE_PATH_STYLE: bool({
    desc: "Use path style for the endpoint instead of the default subdomain style, useful for MinIO",
    default: false,
    allowEmpty: true,
  }),
  RUN_ON_STARTUP: bool({
    desc: "Run a backup on startup of this application",
    default: false,
    allowEmpty: true,
  }),
  BACKUP_FILE_PREFIX: str({
    desc: "Prefix to the file name",
    default: "backup",
  }),
  BUCKET_SUBFOLDER: str({
    desc: "A subfolder to place the backup files in",
    default: "",
    allowEmpty: true,
  }),
  SINGLE_SHOT_MODE: bool({
    desc: "Run a single backup on start and exit when completed",
    default: false,
    allowEmpty: true,
  }),
  // This is both time consuming and resource intensive so we leave it disabled by default
  SUPPORT_OBJECT_LOCK: bool({
    desc: "Enables support for buckets with object lock by providing an MD5 hash with the backup file",
    default: false,
  }),
});
