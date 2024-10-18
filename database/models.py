# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 18, 2024 17:40:34
# Database: sqlite:////tmp/tmp.Up654Da8t2/Texas_Seashells/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class ShellCollectionTime(SAFRSBaseX, Base):
    """
    description: Reference for ideal times during the year to collect the shells.
    """
    __tablename__ = 'shell_collection_time'
    _s_collection_name = 'ShellCollectionTime'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    season = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellList : Mapped[List["Shell"]] = relationship(back_populates="collection_time")



class ShellCollector(SAFRSBaseX, Base):
    """
    description: Information about individuals or entities that collect seashells.
    """
    __tablename__ = 'shell_collector'
    _s_collection_name = 'ShellCollector'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    contact_info = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellCollectionRecordList : Mapped[List["ShellCollectionRecord"]] = relationship(back_populates="collector")



class ShellColor(SAFRSBaseX, Base):
    """
    description: Represents the range of colors that Texas seashells can have.
    """
    __tablename__ = 'shell_color'
    _s_collection_name = 'ShellColor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    color = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellList : Mapped[List["Shell"]] = relationship(back_populates="color")



class ShellConservationStatu(SAFRSBaseX, Base):
    """
    description: Indicates the conservation status of various seashell species.
    """
    __tablename__ = 'shell_conservation_status'
    _s_collection_name = 'ShellConservationStatu'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    status = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellList : Mapped[List["Shell"]] = relationship(back_populates="conservation_status")



class ShellHistoricalUse(SAFRSBaseX, Base):
    """
    description: Captures the historical and cultural significance of seashells.
    """
    __tablename__ = 'shell_historical_use'
    _s_collection_name = 'ShellHistoricalUse'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    usage = Column(String, nullable=False)
    historical_period = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellList : Mapped[List["Shell"]] = relationship(back_populates="historical_use")



class ShellLocation(SAFRSBaseX, Base):
    """
    description: Details various Texas locations where seashells are commonly found.
    """
    __tablename__ = 'shell_location'
    _s_collection_name = 'ShellLocation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellList : Mapped[List["Shell"]] = relationship(back_populates="location")



class ShellSize(SAFRSBaseX, Base):
    """
    description: Categorizes shells by size with associated ranges in centimeters.
    """
    __tablename__ = 'shell_size'
    _s_collection_name = 'ShellSize'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    category = Column(String)
    min_size = Column(Float)
    max_size = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellList : Mapped[List["Shell"]] = relationship(back_populates="size")



class ShellSpecy(SAFRSBaseX, Base):
    """
    description: Stores information about different species of seashells found in Texas.
    """
    __tablename__ = 'shell_species'
    _s_collection_name = 'ShellSpecy'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    common_name = Column(String, nullable=False)
    scientific_name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    ShellList : Mapped[List["Shell"]] = relationship(back_populates="species")



class Shell(SAFRSBaseX, Base):
    """
    description: A comprehensive table combining all attributes of the top ten classic Texas seashells.
    """
    __tablename__ = 'shell'
    _s_collection_name = 'Shell'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    species_id = Column(ForeignKey('shell_species.id'))
    size_id = Column(ForeignKey('shell_size.id'))
    color_id = Column(ForeignKey('shell_color.id'))
    location_id = Column(ForeignKey('shell_location.id'))
    collection_time_id = Column(ForeignKey('shell_collection_time.id'))
    historical_use_id = Column(ForeignKey('shell_historical_use.id'))
    conservation_status_id = Column(ForeignKey('shell_conservation_status.id'))
    discovery_date = Column(DateTime)

    # parent relationships (access parent)
    collection_time : Mapped["ShellCollectionTime"] = relationship(back_populates=("ShellList"))
    color : Mapped["ShellColor"] = relationship(back_populates=("ShellList"))
    conservation_status : Mapped["ShellConservationStatu"] = relationship(back_populates=("ShellList"))
    historical_use : Mapped["ShellHistoricalUse"] = relationship(back_populates=("ShellList"))
    location : Mapped["ShellLocation"] = relationship(back_populates=("ShellList"))
    size : Mapped["ShellSize"] = relationship(back_populates=("ShellList"))
    species : Mapped["ShellSpecy"] = relationship(back_populates=("ShellList"))

    # child relationships (access children)
    ShellCollectionRecordList : Mapped[List["ShellCollectionRecord"]] = relationship(back_populates="shell")
    ShellPhotoList : Mapped[List["ShellPhoto"]] = relationship(back_populates="shell")
    ShellScientificStudyList : Mapped[List["ShellScientificStudy"]] = relationship(back_populates="shell")



class ShellCollectionRecord(SAFRSBaseX, Base):
    """
    description: Records of collected shells including collector and date.
    """
    __tablename__ = 'shell_collection_record'
    _s_collection_name = 'ShellCollectionRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    shell_id = Column(ForeignKey('shell.id'))
    collector_id = Column(ForeignKey('shell_collector.id'))
    collection_date = Column(DateTime)

    # parent relationships (access parent)
    collector : Mapped["ShellCollector"] = relationship(back_populates=("ShellCollectionRecordList"))
    shell : Mapped["Shell"] = relationship(back_populates=("ShellCollectionRecordList"))

    # child relationships (access children)



class ShellPhoto(SAFRSBaseX, Base):
    """
    description: Stores photos of the seashells for documentation.
    """
    __tablename__ = 'shell_photo'
    _s_collection_name = 'ShellPhoto'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    shell_id = Column(ForeignKey('shell.id'))
    url = Column(String)
    description = Column(Text)

    # parent relationships (access parent)
    shell : Mapped["Shell"] = relationship(back_populates=("ShellPhotoList"))

    # child relationships (access children)



class ShellScientificStudy(SAFRSBaseX, Base):
    """
    description: Details scientific studies conducted on seashells.
    """
    __tablename__ = 'shell_scientific_study'
    _s_collection_name = 'ShellScientificStudy'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    research_date = Column(DateTime)
    shell_id = Column(ForeignKey('shell.id'))
    summary = Column(Text)

    # parent relationships (access parent)
    shell : Mapped["Shell"] = relationship(back_populates=("ShellScientificStudyList"))

    # child relationships (access children)
