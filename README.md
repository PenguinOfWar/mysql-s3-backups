# MySQL S3 backups

A simple NodeJS application to backup your MySQL database to S3 via a cron.

Forked from [railwayapp-templates/postgres-s3-backups](https://github.com/railwayapp-templates/postgres-s3-backups) with appreciation for their clean template.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/BZJOmR?referralCode=kHLnFY)

## Configuration

- `AWS_ACCESS_KEY_ID` - AWS access key ID.

- `AWS_SECRET_ACCESS_KEY` - AWS secret access key, sometimes also called an application key.

- `AWS_S3_BUCKET` - The name of the bucket that the access key ID and secret access key are authorized to access.

- `AWS_S3_REGION` - The name of the region your bucket is located in, set to `auto` if unknown.

- `BACKUP_DATABASE_HOST` - The host of the database to backup.

- `BACKUP_DATABASE_PORT` - The port of the database to backup.

- `BACKUP_DATABASE_NAME` - The name of the database to backup.

- `BACKUP_DATABASE_USERNAME` - The username of the database to backup.

- `BACKUP_DATABASE_PASSWORD` - The password of the database to backup.

- `BACKUP_CRON_SCHEDULE` - The cron schedule to run the backup on. Example: `0 5 * * *`

- `AWS_S3_ENDPOINT` - The S3 custom endpoint you want to use. Applicable for 3-rd party S3 services such as Cloudflare R2 or Backblaze R2.

- `AWS_S3_FORCE_PATH_STYLE` - Use path style for the endpoint instead of the default subdomain style, useful for MinIO. Default `false`

- `RUN_ON_STARTUP` - Run a backup on startup of this application then proceed with making backups on the set schedule.

- `BACKUP_FILE_PREFIX` - Add a prefix to the file name.

- `BUCKET_SUBFOLDER` - Define a subfolder to place the backup files in.

- `SINGLE_SHOT_MODE` - Run a single backup on start and exit when completed. Useful with the platform's native CRON schedular.

- `SUPPORT_OBJECT_LOCK` - Enables support for buckets with object lock by providing an MD5 hash with the backup file.
