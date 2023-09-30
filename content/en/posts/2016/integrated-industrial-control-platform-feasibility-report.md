---
title: Development feasibility report of new integrated industrial control development platform
tags:
- 技术
categories:
- 冰河杂谈
date: 2016-06-22
lang: en
translateDate: 9/30/2023
---

**Author:Liang Shuang**

## Introduction

### background

The integrated industrial control development platform is composed of a series of software and hardware, using PLC, embedded operating system, related programming languages, IDE and HMI and other parts. As an important platform for the development of new intelligent equipment control systems in industrial automation production, the integrated industrial control platform is of great significance. At the same time, due to its high development difficulty and high cost, there are not many such platforms, and the completion of the development of this platform will help consolidate the company's competitiveness and the rapid output of various industrial automation products in the future.

### Standard

- IEC 61131
- IEC 61499
- PLCOpen
- Modbus
- Ethernet(TCP/IP)
- OPC

### definition

- PLC: Programmable Logic Controller
- OPC: OLE for Process Control
- IDE: Integrated Development Environment
- HMI: Human Machine Interface
- CAN: Controller Area Network

## Objectives and conditions

### Target

Create an integrated industrial development platform that meets basic industry standards, strive to improve the ease of use of the system, bypass the old and relatively small parts of the existing standard, and develop new features that allow engineers to produce more efficiently.

### Conditions, assumptions and limitations

- Follow all existing industry standards with appropriate deletions and additions, but not any part thereof
- The phasing in this scenario does not take into account human arrangements

## Existing system

### KW system

Covey products, specifically for industrial automation, its IDE software MULTIPROG has a good reputation for its rich functions and good reputation. Its software and embedded system design is very flexible and standard, and can support a large number of hardware devices of various brands.

### Beremiz

The only open source product that is also specifically for industrial automation, its IDE also supports the relevant standards very well, but the use is slightly lacking compared to KW, and the supported hardware devices are relatively limited, but its unique architecture design makes it even run directly on hardware without operating system.

### EPKS

Honeywell's flagship product, everyone understands, there is no need to say more. In short, it is powerful but not standardized enough, and the supported hardware devices are relatively single.

### Cypress-PSoC

The hardware structure uses the ARM+FPGA solution, and the SoC is used to integrate interface resources, which can maximize the utilization of interface resources, and the speed and efficiency are extremely high, but its IDE software is more difficult to use, and does not meet the relevant standards, and the hardware is also using the hardware produced by its own company.

## Proposed new system

### Side-by-side comparison

Please see the table on the next page

|            | Project | New system | EPKSR430              | KW System | Beremiz                    | Cypress-PSoC5         |
| ---        | ---              | ---                                 | ---                   | ---                           | ---                        | ---                   |
| Editor | Name | Undecided | Control Builder       | MULTIPROG                     | PLCOpen Editor             | PSoC Creator          |
|            | LD | is supported ×                                   | ×                     | √                             | √                          | ×                     |
|            | FBD | is supported √                                   | Similar | √                             | √                          | Similar |
|            | Support for IL | ×                                   | ×                     | √                             | √                          | ×                     |
|            | Support ST | √                                   | ×                     | √                             | √                          | ×                     |
|            | Support for SFC | ×                                   | Similar | √                             | √                          | ×                     |
|            | Other languages | C                                   | ×                     | C\#/VB.Net                    | C                          | C                     |
|            | Support for PLCOpenXML | √                                   | ×                     | √                             | √                          | ×                     |
| Compiler | Name | MatPLC 's IEC compiler & C compiler | Control Library       | MULTIPROG                     | MatPLC 's IEC compiler & ? | Keil PK51/ Sourcery G |
|            | Compilation direction | IEC-&gt;ANSI-C-&gt;Binary           | ERDB-&gt;Param List   | IEC-&gt;Binary                | IEC-&gt;ANSI-C-&gt;Binary  | ()-&gt;C-&gt;Binary   |
| Runtime system | Name | Undecided | C300                  | ProConOS                      | CANFestival                | Bootloader            |
|            | Support System | Linux                               | Green Hill            | Linux/ WinCE/ VxWorks/ ...      | Linux/ WinCE/ µC           | Own system |
|            | Support chips | Specific ARM                        | Green Hill            | ARM series | CAN controller | ARM Cortex-M3         |
|            | Hardware Architecture | ARM                                 | ARM+FPGA              | \*ARM                         | ARM/AVR                    | FPGA+ARM              |
|            | Support Distribution | √                                   | √                     | ?                             | √                          | ×                     |
| Data | Name | Modbus                              | ControlNet/ DeviceNet | OPC Server                    | CANOpen                    | N/A                   |
|            | Upper and lower computer communication content | Program/Parameters | Parameters | ?                             | ?                          | ?                     |
|            | Collection frequency | 10ms                                | ?                     | ?                             | ?                          | ?                     |
| Communication | Name | Modbus                              | ControlNet            | HilscherCIF/ INTERBUS/ Modbus | CANOpen                    | Dedicated |
| HMI        | Name | Undecided | HMI Builder           | ProVisIT/MicroVisIT           | SVGUI                      | N/A                   |
|            | Schema | HTML5+WebSocket                     | HTML+VBScript         | Java-applet (custom VBS) | SVG                        | N/A                   |
| Other | Authorization | Business | Business | Business | LGPL                       | Business |

Indicates that a suitable way to confirm the information has not been found

### New features

#### Cloud Libraries feature

Engineers who connect the IDE software to our cloud library will have access to the latest function blocks, which can be downloaded and quickly integrated into their own projects.

Engineers can store limited their own function blocks on the cloud function library, which can be convenient for future use, and can also share their own function blocks, of course, there can also be functions such as internal sharing.

#### Very large number of monitoring points/control points

The design makes the system easy to expand, and the monitoring points that can be directly connected to each controller reach an order of magnitude (this difficulty is large, let's write it first)

#### millisecond-level data acquisition and monitoring

In order to make the data collection timely, the data collection level should be accelerated, and the storage part will design a more effective data structure to store the data, so that the data does not occupy a lot of space (the difficulty is average, this may also be able to develop some patents)

#### Precise organization and analysis of big data

The collection and analysis of a large amount of data is an important information to update and optimize the current production process, so it is necessary to present the data in an appropriate way so that analysts can make further optimization decisions.

#### AI conditioning

(This is a very large and complex feature, which will not be implemented until at least the fifth issue, and will be removed later.) ）

The important prerequisites for completing this function are as follows:

- Timely data feedback;
- A large amount of digital data is available for neural network learning, genetic algorithm variation;
- Each actuator sets a strict safety execution range;
- Because the intelligent controller has more authority, it should be inside the firewall like a normal controller;

Under the above conditions, the host computer can be connected to the controller to directly control the device and update its dynamic model according to the timely feedback information obtained from the sensor.

### System architecture

! [](integrated-industrial-control-platform-feasibility-report/image3.png)

Phase I Functional Architecture Diagram (Simplified Version)

### Stage goals

It should be noted that the objective of this phase is not to consider specific manpower arrangements, but to follow the requirement that the tasks themselves can be completed as parallel and simultaneously as possible when human resources are abundant.

#### Phase 1

The first phase is responsible for the important pathfinding work of the entire project, so try to define the interface between the parts as much as possible, so that each part can enter its own test as soon as possible.

At the technical level, complete the construction of the following basic processes of the whole system:

- Read PLCOpen XML data and generate ANSI-C code (modified using open source MatPLC's IEC compiler)
- Generate ANSI-C code into binary code (using GNU compiler)
- Write firmware related code (communication code refer to CanFestival, library functions only implement addition, subtraction, multiplication and division, IO interface functions need to be implemented)
- Write a debugger for debugging that listens to the CAN network

At the requirements level, at this stage, it is necessary to prepare the requirements prototyping of both the IDE editor and the HMI editor, and determine the list of all the basic library function functions that need to be implemented in the firmware in the end.

After this stage, we will see a complete set of processes from the host computer code to the controller execution, control the device and obtain sensor information back to the host computer.

#### Phase 2

Improve the functions of the previous stage and add the following function points:

- Development of IDE editor (including FBD/ST language editing function, can add, delete, modify and check PLCOpenXML format files)
- Write firmware related code to assist with remote debugging
- Write basic library functions in firmware-related code
- Modified the ANSI-C code generation binary code section so that it can be embedded in related programs such as remote debugging and logging
- Write the Modbus protocol and test the communication
- HMI interface code design and editor development
- Software emulator for hardware devices

At the demand level, it is necessary to prototype the requirements of the cloud function library and the requirement prototyping of the big data collection and analysis center.

At the end of this phase we will see a complete set of processes from the configuration in the editor to the controller execution, control the device and obtain sensor information back to the HMI interface in the host computer, at the same time, the basic library functions that can be used in the IDE editor are also ready, and basic remote debugging can be performed through the IDE (see the values and contents in variables and registers)

#### Phase 3

This phase is fully used to refine all the functional points of the previous stage and conduct joint testing.

At the same time, we began to develop the features of this system that really distinguish it from other systems:

- Cloud function library development
- Big data collection and analysis center

At the end of this phase we will see the complete process that we have seen in the previous phase, but with more complete functionality and good support for configuration and debugging.

#### Another third stage

In the first few stages, in order to quickly develop, only one chip of ARM was selected, so that the system belongs to the SoftPLC category, and if you need to improve efficiency and speed, you can choose to be equipped with an additional FPGA chip. At the same time, in order to improve stability, you can consider equipping dual ARM chips, switching and restoring abnormal chip content when a single chip is abnormal.

According to this scheme, the hardware level of the system will be greatly improved.

## Technical feasibility

In the first stage, various open source programs can be used to reduce the risk, so that the prototype can be completed quickly. The main technical difficulties should be as follows:

- Remote debugging
- (to be added later)

## Cost feasibility

To complete the first phase of development, the following types of engineers and corresponding time are required:

| People | Work | Time |
| ---        | ---                                                                                                     | ---           |
| Circuit Engineer | ARM chip peripheral circuit design<br/> circuit board design<br/> basic connection IO card interface design | 3 people per month |
| Firmware Engineer | The communication function between the host computer and the controller <br /> basic library functions (addition, subtraction, multiplication and division) <br />IO interface functions | 3 people per month |
| Software Engineer | Read PLCOpenXML data and generate ANSI-C code<br/> generate ANSI-C code into binary code<br/> write a debugger that listens to CAN networks 3 people per month |
| Requirements Engineer | IDE Editor Requirements Prototyping <br/>HMI Editor Requirements Prototyping<br/> Basic library functions that need to be implemented in firmware 3 people per month |
| Architecture Engineer | Determine the interface details of each part< br/> and requirements engineer determine the technical feasibility of the corresponding requirements<br/> determine the architecture design that will be used in the next phase 3 people per month |
| Miscellaneous Engineer | Document writing<br/> project progress control<br/> processing and filtering of chores (especially unexpected chores). 3 person-month (part-time) |

Subsequent phase estimates will be adjusted in detail according to the timing of the first phase to obtain more accurate investment data. It should be noted that after the completion of the first phase, the task will be more subdivided, so that more engineers can join the development, so that the progress can be completed faster and better.

## Other feasibility studies

### Copyright feasibility

When LGPL does not use static connection and uses dynamic connection, the use part does not need to inherit the LGPL license, that is, it does not use open source, so there is no copyright risk in use (eh, I don't know if this is right. ）
