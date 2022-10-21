from setuptools import find_packages, setup
from typing import List
from pip._internal.req import parse_requirements

install_reqs = parse_requirements("/Users/DEEPANSHU/Folder001/IRPC/APS-Fault-Detection/requirements.txt")
def get_requirements()->List[str]:
    return [str(ir.req) for ir in install_reqs]
    # requirements_list:List[str] = []
    # return requirements_list


setup(
    name="sensor", 
    version="0.0.1", 
    author="Deepanshu Kaushik", 
    author_email="deepanshukaushik1998@gmail.com", 
    packages=find_packages(),
    install_requires=get_requirements()
)