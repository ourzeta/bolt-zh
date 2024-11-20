@echo off
setlocal EnableDelayedExpansion

set "bindings="

for /f "usebackq tokens=*" %%a in (".env.local") do (
    set "line=%%a"
    if "!line:~0,1!" neq "#" if "!line!" neq "" (
        for /f "tokens=1,* delims==" %%b in ("%%a") do (
            set "name=%%b"
            set "value=%%c"
            set "value=!value:"=!"
            set "bindings=!bindings! --binding !name!=!value!"
        )
    )
)

echo %bindings%
