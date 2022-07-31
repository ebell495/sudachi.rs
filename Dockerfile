FROM rust:latest as builder
COPY . /sudachi.rs/
WORKDIR /sudachi.rs/sudachi-cli
RUN cargo build
WORKDIR /sudachi.rs
RUN tr -d '\015' < fetch_dictionary.sh > fetch_dictionary.sh && chmod +x fetch_dictionary.sh && ./fetch_dictionary.sh
# RUN curl -L \
#     http://sudachi.s3-website-ap-northeast-1.amazonaws.com/sudachidict/sudachi-dictionary-20220519-core.zip \
#     > sudachi-dictionary-20220519-core.zip && \
#     unzip sudachi-dictionary-20220519-core.zip  && \
#     mv sudachi-dictionary-20220519/system_core.dic resources/system.dic && \
#     rm -rf sudachi-dictionary-20220519-core.zip sudachi-dictionary-20220519

FROM debian:bullseye-slim
COPY --from=builder /sudachi.rs /sudachi.rs
# COPY --from=builder /sudachi.rs/resources /resources