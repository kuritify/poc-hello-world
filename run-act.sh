#!/usr/bin/env bash

set -eu -o pipefail

docker_platform_flag=""
if [[ $(uname -m) == 'arm64' ]]; then
  docker_platform_flag="--container-architecture linux/amd64 "
fi

#act ${docker_platform_flag} $@
act --container-architecture linux/amd64 -P ubuntu-latest=nektos/act-environments-ubuntu:18.04 $@

# git command not found
# https://www.rasukarusan.com/entry/2021/01/27/224725
# act ${docker_platform_flag} $@ -P ubuntu-latest=nektos/act-environments-ubuntu:18.04
