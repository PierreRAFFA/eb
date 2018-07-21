FROM mongo

ARG mongoInitDbRootUsername
ARG mongoInitDbRootPassword
ARG mongoApiPassword

#edit the credentials depending on the build args
COPY setup.js /docker-entrypoint-initdb.d/
RUN sed 's#{{mongoInitDbRootUsername}}#'$mongoInitDbRootUsername'#' -i /docker-entrypoint-initdb.d/setup.js
RUN sed 's#{{mongoInitDbRootPassword}}#'$mongoInitDbRootPassword'#' -i /docker-entrypoint-initdb.d/setup.js
RUN sed 's#{{mongoApiPassword}}#'$mongoApiPassword'#' -i /docker-entrypoint-initdb.d/setup.js
RUN cat /docker-entrypoint-initdb.d/setup.js

CMD ["mongod", "--auth", "--smallfiles"]