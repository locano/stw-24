FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    apt-add-repository ppa:deadsnakes/ppa -y && \
    apt-get update && \
    apt-get install -y curl python3.9 python3.9-dev python3.9-distutils && \
    apt-get clean

RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py && \
    python3.9 get-pip.py && \
    rm get-pip.py

RUN ln -sf /usr/bin/python3.9 /usr/bin/python3 && \
    ln -sf /usr/bin/python3.9 /usr/bin/python && \
    ln -sf /usr/local/bin/pip3 /usr/bin/pip3 && \
    ln -sf /usr/local/bin/pip3 /usr/bin/pip

WORKDIR /app

COPY requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

CMD ["python3", "-u", "server.py"]
