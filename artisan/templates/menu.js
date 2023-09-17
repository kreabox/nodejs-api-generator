const menu = () => {
   return `-------------------------------------------------------------------------------\n
    Command is required\n
    node kernel.js [command] [args1] [args2] [args3] [args4] [args5]\n
    Example:\n
    node kernel.js run\n
    -------------------------------------------------------------------------------\n
    Command list:\n
    run : run configurations to production and development\n
    clear : clear configurations to production and development\n
    make:service : To Generate A Services Module\n
    make:service [service_name] [port]\n
    remove [services_name]\n
    make:database : To Generate A Database Module\n
    make:database [module_name] [host] [user] [password] [database_name]\n
    -------------------------------------------------------------------------------\n
    -------------------------------------------------------------------------------\n
    Command is required\n\n
    node kernel.js [command] [args1] [args2] [args3] [args4] [args5]\n
    Example:\n
    node kernel.js run\n
    -------------------------------------------------------------------------------\n
    Command list:\n
    run : run configurations to production and development\n
    clear : clear configurations to production and development\n
    make:service : To Generate A Services Module\n
    make:service [service_name] [port]\n
    remove [services_name]\n
    make:database : To Generate A Database Module\n
    make:database [module_name] [host] [user] [password] [database_name]\n
    -------------------------------------------------------------------------------\n`;
}

module.exports = {
    menu
}