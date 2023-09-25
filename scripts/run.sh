#! /bin/sh

dir="/usr/local/src/scripts"
$dir/install.sh # install wp 
$dir/groups.sh # create groups
$dir/roles.sh # create user roles
$dir/plugins.sh # install plugins
#$dir/product_cat.sh #create product categories
$dir/composer_install.sh # install composer packages

if [ $# -eq 0 ]; then
    apache2-foreground
fi
