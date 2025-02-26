# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Float, Text
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.orm import relationship
from datetime import datetime

# Establish database connection
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=True)
Base = declarative_base()

class ShellSpecies(Base):
    """
    description: Stores information about different species of seashells found in Texas.
    """
    __tablename__ = 'shell_species'
    id = Column(Integer, primary_key=True, autoincrement=True)
    common_name = Column(String, nullable=False)
    scientific_name = Column(String, nullable=False)
    description = Column(Text)

class ShellSize(Base):
    """
    description: Categorizes shells by size with associated ranges in centimeters.
    """
    __tablename__ = 'shell_size'
    id = Column(Integer, primary_key=True, autoincrement=True)
    category = Column(String)
    min_size = Column(Float)
    max_size = Column(Float)

class ShellColor(Base):
    """
    description: Represents the range of colors that Texas seashells can have.
    """
    __tablename__ = 'shell_color'
    id = Column(Integer, primary_key=True, autoincrement=True)
    color = Column(String, nullable=False)

class ShellLocation(Base):
    """
    description: Details various Texas locations where seashells are commonly found.
    """
    __tablename__ = 'shell_location'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text)

class ShellCollectionTime(Base):
    """
    description: Reference for ideal times during the year to collect the shells.
    """
    __tablename__ = 'shell_collection_time'
    id = Column(Integer, primary_key=True, autoincrement=True)
    season = Column(String, nullable=False)
    description = Column(Text)

class ShellHistoricalUse(Base):
    """
    description: Captures the historical and cultural significance of seashells.
    """
    __tablename__ = 'shell_historical_use'
    id = Column(Integer, primary_key=True, autoincrement=True)
    usage = Column(String, nullable=False)
    historical_period = Column(String)

class ShellConservationStatus(Base):
    """
    description: Indicates the conservation status of various seashell species.
    """
    __tablename__ = 'shell_conservation_status'
    id = Column(Integer, primary_key=True, autoincrement=True)
    status = Column(String, nullable=False)
    description = Column(Text)

class Shell(Base):
    """
    description: A comprehensive table combining all attributes of the top ten classic Texas seashells.
    """
    __tablename__ = 'shell'
    id = Column(Integer, primary_key=True, autoincrement=True)
    species_id = Column(Integer, ForeignKey('shell_species.id'))
    size_id = Column(Integer, ForeignKey('shell_size.id'))
    color_id = Column(Integer, ForeignKey('shell_color.id'))
    location_id = Column(Integer, ForeignKey('shell_location.id'))
    collection_time_id = Column(Integer, ForeignKey('shell_collection_time.id'))
    historical_use_id = Column(Integer, ForeignKey('shell_historical_use.id'))
    conservation_status_id = Column(Integer, ForeignKey('shell_conservation_status.id'))
    discovery_date = Column(DateTime, default=datetime.utcnow)

class ShellPhoto(Base):
    """
    description: Stores photos of the seashells for documentation.
    """
    __tablename__ = 'shell_photo'
    id = Column(Integer, primary_key=True, autoincrement=True)
    shell_id = Column(Integer, ForeignKey('shell.id'))
    url = Column(String)
    description = Column(Text)

class ShellScientificStudy(Base):
    """
    description: Details scientific studies conducted on seashells.
    """
    __tablename__ = 'shell_scientific_study'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    research_date = Column(DateTime, default=datetime.utcnow)
    shell_id = Column(Integer, ForeignKey('shell.id'))
    summary = Column(Text)

class ShellCollector(Base):
    """
    description: Information about individuals or entities that collect seashells.
    """
    __tablename__ = 'shell_collector'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    contact_info = Column(String)

class ShellCollectionRecord(Base):
    """
    description: Records of collected shells including collector and date.
    """
    __tablename__ = 'shell_collection_record'
    id = Column(Integer, primary_key=True, autoincrement=True)
    shell_id = Column(Integer, ForeignKey('shell.id'))
    collector_id = Column(Integer, ForeignKey('shell_collector.id'))
    collection_date = Column(DateTime)

# Create tables
Base.metadata.create_all(engine)

# Establish session
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data
shell_species = [
    ShellSpecies(common_name='Texas Lightning Whelk', scientific_name='Busycon perversum', description='A large, predatory marine snail.'),
    ShellSpecies(common_name='Olive Shell', scientific_name='Oliva sayana', description='A shiny, smooth, elonga shell.'),
]

shell_sizes = [
    ShellSize(category='Small', min_size=1.0, max_size=5.0),
    ShellSize(category='Medium', min_size=5.1, max_size=10.0),
]

shell_colors = [
    ShellColor(color='White'),
    ShellColor(color='Brown'),
]

shell_locations = [
    ShellLocation(name='Galveston Beach', description='Popular tourist beach in Texas.'),
    ShellLocation(name='South Padre Island', description='Known for its sand dunes.'),
]

shell_collection_times = [
    ShellCollectionTime(season='Spring', description='Ideal for finding undisturbed shells.'),
    ShellCollectionTime(season='Autumn', description='Best collection shell after a storm.'),
]

shell_historical_uses = [
    ShellHistoricalUse(usage='Tools', historical_period='Prehistoric'),
    ShellHistoricalUse(usage='Jewelry', historical_period='Colonial Era'),
]

shell_conservation_statuses = [
    ShellConservationStatus(status='Not Threatened', description='Common and abundant species.'),
    ShellConservationStatus(status='Endangered', description='Threatened by habitat loss.'),
]

shells = [
    Shell(species_id=1, size_id=1, color_id=1, location_id=1, collection_time_id=1, historical_use_id=1, conservation_status_id=1),
    Shell(species_id=2, size_id=2, color_id=2, location_id=2, collection_time_id=2, historical_use_id=2, conservation_status_id=2),
]

shell_photos = [
    ShellPhoto(shell_id=1, url='http://example.com/photo1.jpg', description='A photo of the Texas Lightning Whelk.'),
    ShellPhoto(shell_id=2, url='http://example.com/photo2.jpg', description='A photo of the Olive Shell.'),
]

shell_scientific_studies = [
    ShellScientificStudy(title='Study on Texas Lightning Whelk', shell_id=1, summary='Research on predatory behavior.'),
    ShellScientificStudy(title='Olive Shell Conservation', shell_id=2, summary='Examining survival rates in captivity.'),
]

shell_collectors = [
    ShellCollector(name='John Doe', contact_info='johndoe@example.com'),
    ShellCollector(name='Mary Smith', contact_info='marysmith@example.com'),
]

shell_collection_records = [
    ShellCollectionRecord(shell_id=1, collector_id=1, collection_date=datetime.now()),
    ShellCollectionRecord(shell_id=2, collector_id=2, collection_date=datetime.now()),
]

# Add data to session
session.add_all(shell_species + shell_sizes + shell_colors + shell_locations +
                shell_collection_times + shell_historical_uses + shell_conservation_statuses +
                shells + shell_photos + shell_scientific_studies + shell_collectors + shell_collection_records)

# Commit transaction
session.commit()

# Close session
session.close()
