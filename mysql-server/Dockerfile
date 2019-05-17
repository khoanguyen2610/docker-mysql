FROM mysql/mysql-server:8.0.16

COPY my.cnf /etc/my.cnf
COPY my-entrypoint.sh /my-entrypoint.sh
RUN chmod +x /my-entrypoint.sh

# CMD ["mysqld", "--server_id=1", "--binlog_checksum=NONE","--gtid_mode=ON","--enforce_gtid_consistency=ON","--log_bin","--log_slave_updates=ON","--master_info_repository=TABLE","--relay_log_info_repository=TABLE","--transaction_write_set_extraction=XXHASH64","--user=mysql","--skip-host-cache","--skip-name-resolve","--default_authentication_plugin=mysql_native_password"]