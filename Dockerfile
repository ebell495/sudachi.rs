FROM rust:latest as builder
COPY . /sudachi.rs/
WORKDIR /sudachi.rs/sudachi-cli
RUN cargo build
WORKDIR /sudachi.rs
RUN tr -d '\015' < fetch_dictionary.sh > fetch_dictionary.sh && chmod +x fetch_dictionary.sh && ./fetch_dictionary.sh

FROM debian:bullseye-slim
COPY --from=builder /sudachi.rs /sudachi.rs
# COPY --from=builder /sudachi.rs/resources /resources